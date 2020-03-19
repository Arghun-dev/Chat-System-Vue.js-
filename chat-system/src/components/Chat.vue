<template>
    <div class="chat container w-100 ChatContainer">
        <div class="card mb-3 w-85 MessageCard" v-chat-scroll>
            <div class="CardHeader" v-for="message in messages" :key='message.id'>
                <div class='messageContent'>
                    <p class="Name">{{ message.name }}:</p>
                    <p class="w-75">{{ message.content }}</p>
                </div>
                <p class="Time">{{ message.timestamp }}</p>
            </div>
            
        </div>
        <div class="text-info">
            <h5 class="card-title">New message Enter to add</h5>
            <NewMessage :name="name" />
        </div>
    </div>
</template>

<script>
import NewMessage from './NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },

    created() {
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style scoped>
.MessageCard {
    border: 1px solid #ccc;
    padding: 1rem;
    box-shadow: 1px 2px 2px #ccc;
    max-height: 300px;
    overflow: auto;
}

.MessageCard::-webkit-scrollbar {
    width: 6px;
}

.MessageCard::-webkit-scrollbar-track {
    background-color: #ddd;
}

.MessageCard::-webkit-scrollbar-thumb {
    background-color: #aaa;
}

.ChatContainer {
    display: flex;
    flex-direction: column;
    padding-top: 5%;
}

.Name {
    color: #1de9b6;
    margin-right: 2rem;
    font-size: 1.2rem;
}

.messageContent {
    display: flex;
    font-size: 1.2rem;
}

.Time {
    color: #ccc;
    margin-top: -1rem;
    font-size: .8rem;
}
</style>
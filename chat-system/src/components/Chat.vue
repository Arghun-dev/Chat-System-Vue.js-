<template>
    <div class="chat container w-100 ChatContainer">
        <div class="card border-info mb-3 w-85 MessageCard">
            <div class="card-header CardHeader" v-for="message in messages" :key='message.id'>
                <div class='messageContent'>
                    <p class="Name">{{ message.name }}:</p>
                    <p>{{ message.content }}</p>
                </div>
                <p class="Time">{{ message.timestamp }}</p>
            </div>
            <div class="card-body text-info">
                <h5 class="card-title">New message Enter to add</h5>
                <NewMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from './NewMessage'
import db from '@/firebase/init'

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
                        timestamp: doc.data().timestamp
                    })
                }
            })
        })
    }
}
</script>

<style scoped>
.ChatContainer {
    display: flex;
    flex-direction: column;
    padding-top: 5%;
}

.Name {
    color: #1de9b6;
    margin-right: 2rem;
}

.messageContent {
    display: flex;
}

.Time {
    color: #ccc;
    margin-top: -1rem;
}
</style>
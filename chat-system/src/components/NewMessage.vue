<template>
    <div class="new-message">
        <form @submit.prevent="addNewMessage">
            <div class="form-group">
                <input type="text" class="form-control" v-model="message">
                <p v-if="feedback" class="text-danger mt-1 ml-1">{{ feedback }}</p>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            message: null,
            feedback: null
        }
    },

    methods: {
        addNewMessage(){
            if(this.message){
                db.collection('messages').add({
                    content: this.message,
                    name: this.name,
                    timestamp: Date.now()
                }).catch((err) => console.log(err))
                this.message = null
                this.feedback = null
            } else {
                this.feedback = 'You have to enter some text'
            }
        }
    }
}
</script>

<style scoped>

</style>
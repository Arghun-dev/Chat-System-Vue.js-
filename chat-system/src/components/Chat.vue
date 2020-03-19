<template>
    <div class="chat container w-100 ChatContainer">
        <div class="card border-info mb-3 w-85 MessageCard">
            <div class="card-header">time</div>
            <div class="card-body text-info">
                <h5 class="card-title">{{ name }}</h5>
                <NewMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from './NewMessage'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.ChatContainer {
    display: flex;
    flex-direction: column;
    padding-top: 5%;
}
</style>
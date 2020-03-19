<template>
    <div class="chat container w-100 ChatContainer">
        <div class="card border-info mb-3 w-85 MessageCard">
            <div class="card-header">time</div>
            <div class="card-body text-info">
                <h5 class="card-title">{{ name }}</h5>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    props: ['name'],
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
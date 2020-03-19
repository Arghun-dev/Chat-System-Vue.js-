<template>
    <div class="new-message">
        <form>
            <div class="form-group">
                <input type="text" class="form-control" v-model="message">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewMessage',
    data() {
        return {
            message: null
        }
    }
}
</script>

<style scoped>

</style>
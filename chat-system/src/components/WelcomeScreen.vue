<template>
  <div class="welcome">
    <div class="box">
      <h1 class="display-2">Welcome</h1>
      <form class="mt-3" @submit.prevent="enterChat">
        <div class="form-group">
          <small for="name">Enter Your Name:</small>
          <input type="text" class="form-control" id="name" aria-describedby="name" v-model='name'>
          <button type="submit" class="btn button text-uppercase">Enter Chat</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: null
    }
  },

  methods: {
    enterChat(){
      console.log(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  border: 1px solid #ccc;
  width: 35%;
  margin-left: 50%;
  margin-top: 17%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: .2rem;
  box-shadow: 1px 2px 2px #ccc;
}

h1 {
  color: #1de9b6;
}

button {
  background-color: #1de9b6;
  color: white;
  margin-top: 8%;
  margin-left: 25%;
}

</style>

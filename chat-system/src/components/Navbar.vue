<template>
    <div class="navbar">
        <nav>
            <ul>
                <h1>Chat System</h1> 
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            
        }
    },

    methods: {
        
    }
}
</script>

<style scoped>
.navbar {
    background-color: #1de9b6;
    padding-top: 1.2rem;
}

h1 {
    margin-top: 1rem;
}

nav {
    width: 100%;
}

ul {
    list-style-type: none; 
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>
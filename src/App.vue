<template>
  <div id="app">
    <nav class="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/first">First Page</a>
        </li>
        <li>
          <a href="/second">Second Page</a>
        </li>
        <li>
          <a href="/third">Third Page</a>
        </li>
      </ul>
    </nav>
    
    <router-view></router-view>    
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.navigation ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: left;
  
}

.navigation ul li {
  margin: 15px;
  font-size: 22px;
}

.navigation ul li a {
  text-decoration: none;
}

.btn {
  margin: 25px;
}
</style>

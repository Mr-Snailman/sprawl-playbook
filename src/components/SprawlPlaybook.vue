<template>
  <div class="sprawl-playbook">
    <div id="playbook">
      <p>Driver, Fixer, Hacker, Hunter, Infiltrator, Killer, Pusher, Reporter, Soldier, Tech</p>
    </div>
    <div id="stats">
      <Stat name="Cred"/>
      <Stat name="Edge"/>
      <Stat name="Style"/>
      <Stat name="Mind"/>
      <Stat name="Meat"/>
      <Stat name="Cool"/>
      <Stat name="Synth"/>
    </div>
    <div id="directives">
    </div>
    <div id="harm">
    </div>
    <div id="cyberware">
    </div>
    <div id="links">
    </div>
    <div id="contacts">
    </div>
    <div id="moves">
    </div>
    <div id="gear">
    </div>
    <div id="starting-lists">
    </div>
    <div id="misc">
      <p>This section is for Playbook specific information</p>
    </div>
    <div id="notes">
    </div>
    <div id="advancement">
    </div>
  </div>
</template>

<script>
import Stat from './Stat'
export default {
  name: 'Sprawl-Playbook',
  data () {
    return {
    }
  },
  components: {
    Stat
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

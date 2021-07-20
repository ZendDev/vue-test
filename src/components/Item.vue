<template>
    <div>
        <div class="name">{{ user.name }}</div>
        <div class="phone">{{ user.phone }}</div>
        <Item class="table__item table__item_child" :user="user" v-for="(user, index) in getChildUsers" :key="index"/>
    </div>
</template>

<script>
import Item from '@/components/Item'

export default {
  name: 'Item',
  props: ['user'],
  components: {
    Item
  },
  computed: {
    getChildUsers () {
      return this.$store.state.users.filter(user => user.parent_id === this.user.id)
    }
  }
}
</script>

<style lang="scss">

</style>

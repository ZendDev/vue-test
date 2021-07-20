<template>
  <div class="table">
      <div class="table__item table__item_header">
        <div class="name">Имя</div>
        <div class="phone">Телефон</div>
      </div>
      <Item class="table__item" :user="user" v-for="(user, index) in getParentUsers" :key="index"/>
      <template v-if="getParentUsers <= 0">
        <p>В таблице нет данных</p>
      </template>
  </div>
</template>

<script>
import Item from '@/components/Item'

export default {
  name: 'List',
  components: {
    Item
  },
  computed: {
    getParentUsers () {
      return this.$store.state.users.filter(item => item.parent_id === 0)
    }
  }
}
</script>

<style lang="scss">
  *{
    box-sizing: border-box;
    font-family: Arial;
    font-size: 16px;
  }
  .table{
    max-width: 500px;
    width:100%;
    margin:auto;
    &__item{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      border-top:0;
      justify-content: flex-end;
      & > div.name, & > div.phone{
        width:50%;
        padding: 7px;
        border:1px solid #000;
        border-bottom:0;
        box-shadow: -1px 2px 0px -1px #000;

      }
      & > div.name{
        border-right:0;
      }
      &_child{
        border:0;
        justify-content: flex-end;
        border-top: 1px solid;
        width: calc(100% - 20px);
        & > div.name, & > div.phone{
          border-top:0;
        }
      }
      &_header{
        & > div{
          background: #AFCDE7;
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
  }
</style>

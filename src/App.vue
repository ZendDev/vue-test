<template>
  <div id="app">
    <button @click="showModal" class="button" type="button">Добавить пользователя</button>
    <List />
    <Modal ref="modal">
      <template v-slot:title>
          <h3 class="modal-title">Добавление пользователя</h3>
      </template>
      <template v-slot:body>
          <div class="input-group">
            <label>Имя</label>
            <input v-model="user.name" type="text">
          </div>
          <div class="input-group">
            <label>Телефон</label>
            <input v-model="user.phone" type="text">
          </div>
          <div class="input-group">
            <label>Начальник</label>
            <select v-model="user.parent_id">
              <option value="0" selected>Выберите начальника</option>
              <option v-for="option in $store.state.users" :key="option.id" :value="option.id">{{ option.name }}</option>
            </select>
          </div>
      </template>
      <template v-slot:footer>
          <button :disabled="!validateForm" @click="addUser" class="modal-footer__button">Добавить</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import List from '@/components/List'
import Modal from '@/components/Modal'

export default {
  name: 'App',
  data () {
    return {
      user: {
        name: '',
        phone: '',
        parent_id: 0
      }
    }
  },
  components: {
    List,
    Modal
  },
  methods: {
    showModal () {
      this.$refs.modal.show = true
    },
    addUser () {
      this.$store.dispatch('addUser', {...this.user, id: Object.keys(this.$store.state.users).length + 1})
      this.$refs.modal.show = false
      this.user.name = ''
      this.user.phone = ''
      this.user.parent_id = 0
    }
  },
  computed: {
    validateForm () {
      return this.user.name !== '' && this.user.phone !== ''
    }
  }
}
</script>

<style lang="scss">
  .button{
    background: none;
    border: 2px solid #AFCDE7;
    font-weight: 600;
    font-size: 14px;
    border-radius: 5px;
    display: block;
    padding: 5px 20px;
    margin: 20px auto 20px auto;
    cursor: pointer;
  }
  .input-group{
    margin: 20px 0;
    display: flex;
    align-items: center;
    label{
      width: 100px;
      display: block;
      font-size: 14px;
      font-weight: 600;
    }
    input,select{
      outline: none;
      border:1px solid #000;
      border-radius: 5px;
      height:25px;
      max-width:250px;
      padding-left:10px;
      width:100%;
    }
  }
</style>

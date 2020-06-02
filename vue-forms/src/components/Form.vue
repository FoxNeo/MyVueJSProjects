<template>
  <div class="container">
  <form>
    <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <h1>Contact form</h1>
        <hr>
          <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" class="form-control" v-model="PersonForm.name">
          </div>
          <div class="form-group">
              <label for="email">E-mail:</label>
              <input type="text" id="email" class="form-control" v-model="PersonForm.email">
          </div>
      </div>
    </div>
    <div class="row">
    <div class="col-xs12 col-sm-8 col-md-6">
          <label for="message">Message</label><br>
            <textarea id="message" cols="60" rows="5" v-model="message"></textarea>
            </div>
    </div>
    <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <div class="form-group">
          <label for="sendMail">
            <input type="checkbox" id="sendMail" value="sendMail" v-model="optionMail">Send E-Mail
          </label>&nbsp;&nbsp;
          <label for="sendCopy">
            <input type="checkbox" id="sendCopy" value="sendCopy" v-model="optionMail">Send copy 
          </label>
        </div>
      </div>
    </div>
        <div class="row">
          <div class="col-xs12 col-sm-8 col-md-6">
        <div class="form-group">
          <label for="male">
            <input type="radio" id="male" value="m" v-model="gender">Male
          </label>&nbsp;&nbsp;
          <label for="female">
            <input type="radio" id="female" value="f" v-model="gender">Female 
          </label>
        </div>
      </div>
    </div>
     <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <label for="calender">Time</label>
        <select id="calender" class="form-control" v-model="calender">
          <option v-for="item in dataCalender" :key="item"> {{ item }}</option>
        </select>
      </div>
      </div>

      <div class="row">
      <div class="col-xs12 col-sm-8 col-md-6"><br>
        <button class="btn btn-primary" @click.prevent="send">Send form</button>
      </div>
      </div>
  </form>

  <div class="row">
    <div class="col-xs12 col-sm-8 col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Data</h3>
        </div>
          <div class="panel-body">
          <p>Name: {{ PersonForm.name }}</p>
          <p>E-mail: {{ PersonForm.email }}</p>
          <p style="white-space: pre">Message: <br> {{ message }}</p>
          <p>Option to send E-Mail:
            <ul>
              <li v-for="item in optionMail" :key="item" :selected="item == 'monday'"> {{ item }}</li>
            </ul>
          </p>
          <p>Gender: {{ gender }}
          </p>
          <p>Time: {{ dataCalender }}</p>
          <p>Status: {{ sended }}</p>
          </div>
      </div>
    </div>
  </div>
  </div>
</template> 

<script>

export default {
  name: 'form',
  data(){
    return {
      PersonForm: {
        name: '',
        email: ''
      },
      message: 'test',
      optionMail: [],
      gender: 'm',
      dataCalender: ['monday', 'tuesday', 'wednesday'],
      sended: false
    }
  },
  methods:{
    send(){
      this.sended = true;
    }
  }
}
</script>

<style>


</style>

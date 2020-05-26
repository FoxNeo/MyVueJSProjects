<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <div class="form">
      <div class="form-group">
        <label>Title</label>
        <input class="form-control" type="text" v-model="note.title" />
      </div>
      <div class="form-group">
        <label>Text</label>
        <textarea class="form-control" v-model="note.text"></textarea>
      </div>
      <button class="btn btn-primary" @click="agregarnote">+ Add</button>
    </div>
    <div class="col-sm-12">
      <div class="col-sm-4 note" v-for="(note, index) in notes">
        <div class="card">
          <div class="card-block">
            <div class="card-title">{{note.title}}</div>
            <div class="card-subtitle mb-2 text-muted">{{note.date}}</div>
            <p class="card-text">{{note.text}}</p>
          </div>
          <button class="close" @click="removeNote(index)">&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Notes managment",
      note: {
        title: "",
        text: ""
      },
      notes: [
        {
          title: "Go shopping",
          text: "Get some food from the supermarket",
          date: new Date(Date.now()).toLocaleDateString()
        }
      ]
    };
  },
  methods: {
    agregarnote: function() {
      let { text, title } = this.note;
      this.notes.push({
        text,
        title,
        date: new Date(Date.now()).toLocaleString()
      });
    },
    removeNote: function(index) {
      this.notes.splice(index, 1);
    }
  }
};
</script>

<style>
.form {
  text-align: left;
}
.card {
  text-align: left;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
}
.note {
  padding: 5px;
}
</style>
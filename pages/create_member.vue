<template>
  <div>
    <div>名前（カタカナ）：<input type="text" v-model="katakanaName" /></div>
    <div>メール：<input type="text" v-model="email" /></div>
    <button @click="createHandler">作成</button>
    <br />
    <ul>
      <li v-for="member in members" :key="member.id">
        {{ member.katakanaName }}, {{ member.email }} <button　@click="deleteMember(member.id)">削除</button>
        <button　@click="updateMember(member.id)">修正</button>
      </li>
    </ul>
    <hr />
    <div v-if="isUpdate">
        <div>update名前（カタカナ）：<input type="text" v-model="updateKatakanaName" /></div>
        <div>updateメール：<input type="text" v-model="updateEmail" /></div>
        <div>
            <button @click="sendUpdaetMember">updateボタン</button>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      katakanaName: "",
      email: "",
      members: "",
      updateKatakanaName: "",
      updateEmail: "",
      updateId: "",
      isUpdate: false
    };
  },
  methods: {
    createHandler() {
      axios
        .post("http://localhost:4000/api/member/create", {
          katakanaName: this.katakanaName,
          email: this.email,
        })
        .then((res) => {
          const result = res.data;
          this.aaa = result;
        });
    },
    deleteMember(memberId) {
        axios.delete(`http://localhost:4000/api/member/delete/${memberId}`).then((res) => {
            console.log(res)
            location.reload();
        })
    },
    updateMember(memberId) {
        this.isUpdate = true;
        axios.get(`http://localhost:4000/api/member/detail/${memberId}`).then((res) => {
            //console.log(res.data)
            this.updateKatakanaName = res.data.katakanaName
            this.updateEmail = res.data.email
            this.updateId = res.data.id
        })

    },
    sendUpdaetMember() {
        console.log(`http://localhost:4000/api/member/update/${this.updateId}`)
        axios.patch(`http://localhost:4000/api/member/update/${this.updateId}`, {
            katakanaName: this.updateKatakanaName,
            email: this.updateEmail
        }).then((res) => {
            console.log("111")
            location.reload();
        })
    }
  },
  mounted() {
    axios.get("http://localhost:4000/api/member/list").then((res) => {
      this.members = res.data;
    });
  },
};
</script>
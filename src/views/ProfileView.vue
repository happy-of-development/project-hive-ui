<script>
import axios from 'axios'

export default {
  
  data() {
    return {
      orgProfile : {
        id : '11111111',
        name : '닉네임',
        team : '우리팀',
        email : 'test@test.com',
        mobile : '010-1111-1111'
      },
      profile : {
        id : '',
        name : '',
        team : '',
        email : '',
        mobile : ''
      },
      password : '',
      reenterPassword : '',
      modifyMode : false
    }
  },  
  mounted() {
    // 객체를 복사함. this.orgProfile로 직접 assign하면 객체 참조가 됨.
    this.fetchData();
  },
  methods : {
      fetchData() {
        axios.get('http://localhost:9080/user?id=11111111', {
          headers: {
            'x-auth-token': '48e16eae-6a8a-42ba-85f1-1a405c500b70'
          }
        })
        .then(res=>{
          console.log(res.data)
          console.log(res.data.data.teamName)
          this.orgProfile.team = res.data.data.teamName;

          this.profile = {...this.orgProfile}
        })
        .catch(function(error) {
          console.log(error)
        });
      },
      onModifyClick() {
        this.modifyMode = true
      },
      onConfirmClick() {

        this.modifyMode = false
      },
      onCancelClick() {
        this.profile = {...this.orgProfile}
        this.password = ''
        this.reenterPassword = ''
        this.modifyMode = false;
      }
    }
  }

</script>


<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <!-- 프로필 사진 -->
      <div class="col-md-4" >
        <div class="row-9 mt-3">
          <img class="border border-1" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw">
        </div>
        <div class="row-3 mt-3">
          <button type="button" class="btn btn-primary">사진변경</button>
        </div>
      </div>

      <!-- 사용자 정보-->
      <div class="col-md-4 ">
        <div class="row">
          <div class="col-4">
            <span class="input-group-text justify-content-center mt-3">아이디</span>
            <span class="input-group-text justify-content-center mt-3">이름</span>
            <span class="input-group-text justify-content-center mt-3">팀</span>
            <span class="input-group-text justify-content-center mt-3">이메일</span>
            <span class="input-group-text justify-content-center mt-3">전화번호</span>
            <span id="password-label" class="input-group-text justify-content-center mt-3" v-bind:class="{'d-none' : !modifyMode}">비밀번호</span>
            <span id="reenter-password-label" class="input-group-text justify-content-center mt-3" v-bind:class="{'d-none' : !modifyMode}">비밀번호확인</span>
          </div>
          <div class="col-8">
            <input type="text" class="form-control no-select mt-3" v-model="profile.id">
            <input id="name" type="text" class="form-control mt-3" v-bind:class="{'no-select' : !modifyMode}" v-model="profile.name">
            <input type="text" class="form-control no-select mt-3" v-model="profile.team">
            <input id="email" type="email" class="form-control mt-3" v-bind:class="{'no-select' : !modifyMode}" v-model="profile.email">
            <input id="mobile" type="text" class="form-control mt-3" v-bind:class="{'no-select' : !modifyMode}" v-model="profile.mobile">
            <input id="password" type="password" class="form-control mt-3" v-bind:class="{'d-none' : !modifyMode}" v-model="password">
            <input id="reenter-password" type="password" class="form-control mt-3" v-bind:class="{'d-none' : !modifyMode}" v-model="reenterPassword">
          </div>
        </div>
        
        <div>
          <button id="modify" type="button" class="btn btn-primary m-3" v-bind:class="{'d-none' : modifyMode}" @click="onModifyClick">정보수정</button>
          <button id="confirm" type="button" class="btn btn-primary m-3" v-bind:class="{'d-none' : !modifyMode}" @click="onConfirmClick">완료</button>
          <button id="cancel" type="button" class="btn btn-primary m-3" v-bind:class="{'d-none' : !modifyMode}" @click="onCancelClick">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.no-select {
  pointer-events: none;
}
</style>
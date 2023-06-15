<script>
export default {
  data() {
    return {
      modifyMode : false
    }
  },
  methods : {
      onModifyClick() {
        this.modifyMode = true;
      },
      onConfirmClick() {
        
      },
      onCancelClick() {
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
            <input type="text" class="form-control no-select mt-3">
            <input id="name" type="text" class="form-control mt-3" v-bind:class="{'no-select' : !modifyMode}">
            <input type="text" class="form-control no-select mt-3">
            <input id="email" type="email" class="form-control mt-3" v-bind:class="{'no-select' : !modifyMode}">
            <input id="mobile" type="text" class="form-control mt-3" v-bind:class="{'no-select' : !modifyMode}">
            <input id="password" type="password" class="form-control mt-3" v-bind:class="{'d-none' : !modifyMode}">
            <input id="reenter-password" type="password" class="form-control mt-3" v-bind:class="{'d-none' : !modifyMode}">
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
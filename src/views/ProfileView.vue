<script>
export default {

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
          </div>
          <div class="col-8">
            <input type="text" class="form-control no-select mt-3">
            <input type="text" class="form-control no-select mt-3">
            <input type="text" class="form-control no-select mt-3">
            <input type="email" class="form-control no-select mt-3">
            <input type="text" class="form-control no-select mt-3">
          </div>
        </div>
        
        <div class="mt-3">
          <button type="button" class="btn btn-primary">정보수정</button>
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
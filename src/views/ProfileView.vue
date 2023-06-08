<script>
export default {

}
</script>


<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-3" >
        <div class="row-9">
          <img src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw">
        </div>
        <div class="row-3">
          <button type="button" class="btn btn-primary">사진변경</button>
        </div>
      </div>
      <div class="col-4">
        <div class="input-group mt-3">
          <span class="input-group-text justify-content-center" style="width:100px">아이디</span>
          <input type="text" class="form-control no-select" aria-label="아이디" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mt-3">
          <span class="input-group-text justify-content-center" style="width:100px">이름</span>
          <input type="text" class="form-control no-select" aria-label="이름" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mt-3">
          <span class="input-group-text justify-content-center" style="width:100px">팀</span>
          <input type="text" class="form-control no-select" aria-label="팀" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mt-3">
          <span class="input-group-text justify-content-center" style="width:100px">이메일</span>
          <input type="text" class="form-control no-select" aria-label="이메일" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mt-3">
          <span class="input-group-text justify-content-center" style="width:100px">전화번호</span>
          <input type="text" class="form-control no-select" aria-label="전화번호" aria-describedby="basic-addon1">
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
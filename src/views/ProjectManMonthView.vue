<template>
  <div class="root container">
    <div class="card">
      <div class="card-body">
        <div class="row justify-content-between">
          <div class="col-auto">
            <p class="fs-3 fw-bold text-muted">MM</p>
          </div>
          <div class="col-auto ">
            <button type="button" class="btn btn-outline-success">표시 변경</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2" id="project_group">
                <div id="project_name">
                  Project 1
                </div>
                <div id="project_period">
                  (2022.06.01 ~ 2023.12.31)
                </div>
              </div>
              <div class="col-md-8 tbd" id="project_group">
                그래프 데이터 영역 (TBD)
              </div>
              <div class="col-md-2" id="project_extra">
                <div>계획 합계: 0 MM</div>
                <div>투입 합계: 0 MM</div>
                <div>연간 총합: 0 MM</div>
                <div>투입 누적: 0 MM</div>
              </div>
            </div>
          </div>
          <div class="card-footer" id="project_user">
              <!-- Table -->
              <table class="table table-light">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">이름</th>
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    <th scope="col">3</th>
                    <th scope="col">4</th>
                    <th scope="col">5</th>
                    <th scope="col">6</th>
                    <th scope="col">7</th>
                    <th scope="col">8</th>
                    <th scope="col">9</th>
                    <th scope="col">10</th>
                    <th scope="col">11</th>
                    <th scope="col">12</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>홍길동</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>
                      <div class="row row-cols-auto">
                        <div class="col">
                          <div>계획: 0.5</div>
                          <button type="button" class="btn btn-sm btn-outline-secondary">요청</button>
                        </div>
                        <div class="col">
                          <div>투입: 0.5</div>
                          <button type="button" class="btn btn-sm btn-outline-warning">요청</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  components: {
  },
}
</script>

<style>
  .tbd {
    background-color: #eee;
  }
</style>

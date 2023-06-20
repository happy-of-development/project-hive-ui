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
        <div v-if="projectList && projectList.length == 0">데이터가 없습니다.</div>
        <div v-else>
          <div v-for="(project, index) in projectList" :key="index" class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-2" id="project_group">
                  <div id="project_name">
                    {{ project?.name }}
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
                      <th scope="col">1월</th>
                      <th scope="col">2월</th>
                      <th scope="col">3월</th>
                      <th scope="col">4월</th>
                      <th scope="col">5월</th>
                      <th scope="col">6월</th>
                      <th scope="col">7월</th>
                      <th scope="col">8월</th>
                      <th scope="col">9월</th>
                      <th scope="col">10월</th>
                      <th scope="col">11월</th>
                      <th scope="col">12월</th>
                    </tr>
                  </thead>
                  <tbody>
                      <template v-for="(user, i) in project?.userList" :key="user.id">
                          <tr>
                            <th scope="row">{{ i }}</th>
                            <td>{{ user?.name }} ({{ user?.id }})</td>
                            <td>{{ user?.actual[0] }} / {{ user?.expect[0] }}</td>
                            <td>{{ user?.actual[1] }} / {{ user?.expect[1] }}</td>
                            <td>{{ user?.actual[2] }} / {{ user?.expect[2] }}</td>
                            <td>{{ user?.actual[3] }} / {{ user?.expect[3] }}</td>
                            <td>{{ user?.actual[4] }} / {{ user?.expect[4] }}</td>
                            <td>{{ user?.actual[5] }} / {{ user?.expect[5] }}</td>
                            <td>{{ user?.actual[6] }} / {{ user?.expect[6] }}</td>
                            <td>{{ user?.actual[7] }} / {{ user?.expect[7] }}</td>
                            <td>{{ user?.actual[8] }} / {{ user?.expect[8] }}</td>
                            <td>{{ user?.actual[9] }} / {{ user?.expect[9] }}</td>
                            <td>{{ user?.actual[10] }} / {{ user?.expect[10] }}</td>
                            <td>{{ user?.actual[11] }} / {{ user?.expect[11] }}</td>
                          </tr>
                      </template>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projectManMonthStore } from '@/stores/projectManMonth';
import {storeToRefs} from "pinia";
import {computed, ref} from "vue";

const props = defineProps({
  foo: String
})


const { projectList } = storeToRefs(projectManMonthStore())
const projectMmStore = projectManMonthStore()

projectMmStore.request('2023')

const getProjectList = ref([])

</script>

<style>
  .tbd {
    background-color: #eee;
  }
</style>

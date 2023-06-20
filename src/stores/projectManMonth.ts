import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type User = {
    id: string;
    name: string;
    actual: number[];
    expect: number[];
}

export type ProjectMm = {
    id: string;
    name?: string;
    userList: User[];
}

export const projectManMonthStore = defineStore('project_mm', () => {
    const state: ProjectMm[] = ref([] as any)
    const projectList = computed(() => state)
    function request(projectYear: string) {
        console.log(projectYear)
        update([
            {
                "id": "0",
                "name": "프로젝트 하이브",
                "userList": [
                    {
                        "id": "bongjun",
                        "name": "백봉준",
                        "actual": [
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            0.0,
                            0.0,
                            null,
                            null,
                            null,
                            null,
                            6.0
                        ],
                        "expect": [
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            12.0
                        ],
                        "mmList": [
                            {
                                "type": "ACTUAL",
                                "mm": [
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    0.0,
                                    0.0,
                                    null,
                                    null,
                                    null,
                                    null,
                                    6.0
                                ]
                            },
                            {
                                "type": "EXPECT",
                                "mm": [
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    1.0,
                                    12.0
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "1",
                "name": "첫프로젝트",
                "userList": [
                    {
                        "id": "11111111",
                        "name": "1번사용자",
                        "expect": [
                            0.1,
                            0.2,
                            0.3,
                            0.4,
                            0.1,
                            0.5,
                            0.5,
                            0.5,
                            0.1,
                            0.2,
                            0.3,
                            0.4,
                            3.6
                        ],
                        "actual": [
                            0.4,
                            0.1,
                            0.5,
                            0.5,
                            0.5,
                            0.1,
                            0.2,
                            0.3,
                            0.1,
                            0.2,
                            0.3,
                            0.4,
                            3.6
                        ],
                        "mmList": [
                            {
                                "type": "EXPECT",
                                "mm": [
                                    0.1,
                                    0.2,
                                    0.3,
                                    0.4,
                                    0.1,
                                    0.5,
                                    0.5,
                                    0.5,
                                    0.1,
                                    0.2,
                                    0.3,
                                    0.4,
                                    3.6
                                ]
                            },
                            {
                                "type": "ACTUAL",
                                "mm": [
                                    0.4,
                                    0.1,
                                    0.5,
                                    0.5,
                                    0.5,
                                    0.1,
                                    0.2,
                                    0.3,
                                    0.1,
                                    0.2,
                                    0.3,
                                    0.4,
                                    3.6
                                ]
                            }
                        ]
                    },
                    {
                        "id": "22222222",
                        "name": "2번사용자",
                        "expect": [
                            0.2,
                            0.2,
                            0.2,
                            0.2,
                            0.2,
                            0.2,
                            0.2,
                            0.2,
                            0.2,
                            0.2,
                            0.2,
                            0.2,
                            2.4
                        ],
                        "actual": [
                            0.4,
                            0.4,
                            0.4,
                            0.4,
                            0.4,
                            0.4,
                            0.4,
                            0.4,
                            0.4,
                            0.4,
                            0.4,
                            0.4,
                            4.8
                        ],
                        "mmList": [
                            {
                                "type": "EXPECT",
                                "mm": [
                                    0.2,
                                    0.2,
                                    0.2,
                                    0.2,
                                    0.2,
                                    0.2,
                                    0.2,
                                    0.2,
                                    0.2,
                                    0.2,
                                    0.2,
                                    0.2,
                                    2.4
                                ]
                            },
                            {
                                "type": "ACTUAL",
                                "mm": [
                                    0.4,
                                    0.4,
                                    0.4,
                                    0.4,
                                    0.4,
                                    0.4,
                                    0.4,
                                    0.4,
                                    0.4,
                                    0.4,
                                    0.4,
                                    0.4,
                                    4.8
                                ]
                            }
                        ]
                    }
                ]
            }
        ])
    }
    function update(projectList: object) {
        Object.assign(state, projectList)
        console.log(state)
    }

    return { state, projectList, request, update }
})

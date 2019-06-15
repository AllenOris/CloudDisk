<template>
    <div style="padding: 40px;">
        <el-steps :active="1" style="width: 100%" align-center>
            <el-step title="写MySQL操作语句" icon="el-icon-edit"></el-step>
            <el-step title="上传" icon="el-icon-upload"></el-step>
            <el-step title="返回结果" icon="el-icon-document-checked"></el-step>
        </el-steps>
        <el-divider></el-divider>

        <div style="margin: 20px 0;"></div>
        <el-button style='display:table;margin:0 auto;' type="primary" @click="upload">上传<i
                class="el-icon-upload el-icon--right"></i></el-button>
        <div style="margin: 20px 0;"></div>
        <el-autocomplete
                class="inline-input"
                v-model="sql"
                style="width: 100%"
                type="textarea"
                :fetch-suggestions="querySearch"
                :autosize="{ minRows: 6, maxRows: 30}"
                placeholder="Please input MySQL operation"
                @select="handleSelect"
                :maxlength="100"
                show-word-limit
                clearable
        ></el-autocomplete>
        <div style="margin: 20px 0;"></div>
        <el-table v-if="tableData.length>0"
                  :data="tableData"
                  stripe
                  border
                  height="800"
                  style="width: 100%">
            <el-table-column v-for="item in row" :prop="item" :label="item" sortable>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                models: [],
                sql: '',
                tableData: [],
                row: [],
                notifyTime: 1500
            }
        },
        methods: {
            upload() {
                if (this.sql === '') {
                    this.$notify({
                        title: '消息',
                        message: 'SQL不可为空',
                        type: 'warning',
                        offset: 150,
                        duration: this.notifyTime
                    });
                    return;
                }
                let fd = new FormData();
                fd.append('query', this.sql);
                this.$axios.post("/api/admin/test", fd).then(res => {

                        // console.log(res);
                        if (res.data.code * 1 === 0) {
                            this.tableData = res.data.data;
                            if (this.tableData.length > 0) {
                                this.row = Object.keys(this.tableData[0]);
                            }
                            this.$notify({
                                title: '消息',
                                message: "操作成功",
                                type: 'success',
                                offset: 150,
                                duration: this.notifyTime
                            });
                            // console.log(':', this.tableData, this.row);
                        } else if (res.data.code * 1 === 501) {
                            this.$notify({
                                title: '消息',
                                message: "SQL格式错误",
                                type: 'error',
                                offset: 150,
                                duration: this.notifyTime
                            });
                        } else {
                            this.$notify({
                                title: '消息',
                                message: res.data.message,
                                type: 'error',
                                offset: 150,
                                duration: this.notifyTime
                            });
                        }
                    }
                );
            },
            querySearch(queryString, cb) {
                let models = this.models;
                let results = queryString ? models.filter(this.createFilter(queryString)) : models;
                // 调用 callback 返回建议列表的数据
                cb(results);
            }
            ,
            createFilter(queryString) {
                return (model) => {
                    return (model.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            }
            ,
            loadAll() {
                return [
                    {"value": 'select * from User limit 10;'},
                    {"value": 'select * from File limit 10;'},
                    {"value": 'select * from Download limit 10;'},
                    {"value": 'select * from User,File where File.userID=User.userID Limit 10;'},
                    {"value": 'select * from User where permission>0 Limit 10'},
                    {
                        "value": 'select User.userID, max(User.name) as name, sum(File.size) as sumSize\n' +
                            'from User,\n' +
                            '     File\n' +
                            'where User.userID = File.userID\n' +
                            'group by User.userID\n' +
                            'order by sum(File.size) desc\n' +
                            'limit 10;'
                    },
                    {"value": "delete File from File where File.fileID=?;"},
                    {"value": "select * from checkView Limit 10;"},
                ];
            }
            ,
            handleSelect(item) {
            }
        },
        mounted() {
            this.models = this.loadAll();
        }
    }
</script>


<style scoped>

</style>
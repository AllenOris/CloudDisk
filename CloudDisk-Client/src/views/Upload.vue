<template>
    <div class="loginForm">
        <el-page-header @back="goBack" content="上传文件">
        </el-page-header>
        <el-upload
                class="upload-demo"
                style="width: 50%;margin-left:25% ;margin-top:5%;"
                ref="upload"
                :action="UploadUrl()"
                :multiple="true"
                :drag="true"
                :limit="maxCount"
                :before-upload="beforeUpload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-exceed="handleExceed"
                :file-list="fileList"
                :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">可拖拽文件，最多上传{{maxCount}}文件，且不超过{{maxFile}}MB</div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: "upload",
        data() {
            return {
                fileList: [],
                maxFile: 500,
                maxCount: 10
            }
        },
        methods: {
            beforeUpload(file) {
                //console.log(file);
                let fd = new FormData();
                fd.append('file', file);//传文件
                //fd.append('name', this.$name);
                //fd.append('password', this.$password);
                //console.log(file.size);
                fd.append('fileName', file.name);
                this.$axios.post("/api/user/upload", fd).then(res => {
                    if (res.data.code == 0) {
                        this.$message({message: ` ${file.name} 上传成功`, type: "success"});
                    } else {
                        this.$message.error(res.data.message);
                    }
                });
            },
            getData() {
                return ({
                    name: this.$name,
                    password: this.$password,
                    fileName: this.fileList.length === 0 ? "" : this.fileList[0].name
                });
            },
            UploadUrl() {
                return this.$axios.defaults.baseURL + '/api/666';
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 ${this.maxCount} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
                //console.log("list:", fileList);
            },
            submitUpload() {
                this.getData();
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
               // console.log(file, fileList);
            },
            handlePreview(file) {
                //console.log(file);
            },
            goBack() {
                location.reload();
            }
        }
    }
</script>

<style scoped>
    .loginForm {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        height: 80%;
        background-color: #fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #cccc;
    }
</style>

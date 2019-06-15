<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">我的云盘</span>
            </div>
            <el-form :model="loginUser" :rules="rules" ref="loginForm" class="loginForm" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="loginUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" @keyup.enter.native="submitForm('loginForm')">
                    <el-input v-model="loginUser.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登 录</el-button>
                </el-form-item>
                <div class="tiparea">
                    <p>还没有账号？现在
                        <router-link to='/register'>注册</router-link>
                    </p>
                </div>
            </el-form>
        </section>
    </div>
</template>

<script>
    import jwt_decode from "jwt-decode";

    export default {
        name: "login",
        data() {
            return {
                loginUser: {
                    name: "",
                    password: ""
                },
                rules: {
                    name: [
                        {
                            required: true,
                            message: "用户名格式不正确",
                            trigger: "blur"
                        }
                    ],
                    password: [
                        {required: true, message: "密码不能为空", trigger: "blur"},
                        {min: 4, max: 30, message: "长度在 4 到 30 个字符", trigger: "blur"}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                let name = this.loginUser.name;
                let password = this.loginUser.password;
                // console.log(this.loginUser, name, password);
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.$axios.post("/api/login", this.loginUser,{withCredentials: true}).then(res => {
                            // 登录成功
                            const {token} = res.data;
                            if (res.data.code == 0) {
                                // this.$name = name;
                                // this.$password = password;
                                //console.log(this.$name);
                                // console.log('session',this.$session);
                                // console.log('res',res);
                                // console.log('cookie',this.$cookies);

                                this.$message({message: "登陆成功", type: "success"});
                                this.$router.push("/myfile");
                            } else {
                                this.$message.error(res.data.message);
                            }
                        });
                    } else {
                        this.$message.error("error submit!!");
                        return false;
                    }
                },err=>{
                    this.$message.error(err);
                    return false;
                });
            },
            isEmpty(value) {
                return (
                    value === undefined ||
                    value === null ||
                    (typeof value === "object" && Object.keys(value).length === 0) ||
                    (typeof value === "string" && value.trim().length === 0)
                );
            }
        }
    };
</script>

<style scoped>
    .login {
        position: relative;
        width: 100%;
        height: 100%;
        background: url(../assets/bg2.jpg) no-repeat center center;
        background-size: 100% 100%;
    }

    .form_container {
        width: 370px;
        height: 210px;
        position: absolute;
        top: 20%;
        left: 34%;
        padding: 25px;
        border-radius: 5px;
        text-align: center;
    }

    .form_container .manage_tip .title {
        font-family: "Microsoft YaHei";
        font-weight: bold;
        font-size: 26px;
        color: #fff;
    }

    .loginForm {
        margin-top: 20px;
        background-color: #fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #cccc;
    }

    .submit_btn {
        width: 100%;
    }

    .tiparea {
        text-align: right;
        font-size: 12px;
        color: #333;
    }

    .tiparea p a {
        color: #409eff;
    }
</style>



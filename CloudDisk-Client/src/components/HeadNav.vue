<template>
    <div>
        <div class="header-nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item style="float:left" index='0'>
<!--                    <img src="../assets/logo.png" class='logo' alt="">-->
                    <span class='title'>我的云盘</span></el-menu-item>
                <el-menu-item style="float:left" index='1'>文件系统</el-menu-item>
                <el-menu-item v-if='permission*1===1' style="float:left" index='2'>控制台</el-menu-item>
                <el-menu-item style="float:right" index=3>
                    <el-button type="primary" icon="el-icon-user-solid" @click="logout">退出登陆</el-button>
                </el-menu-item>
            </el-menu>
        </div>

        <div>
            <el-row class="menu_page">
                <el-col>
                    <el-menu
                            mode="vertical"
                            background-color="#324057"
                            text-color="#fff"
                            active-text-color="#409eff"
                            class="el-menu-vertical-demo">
                        <div v-if="activeIndex*1===1">
                            <router-link v-for="menu in leftBarMenu" :to=menu.link>
                                <el-menu-item index=index>
                                    <i class="fa fa-margin fa-server"></i>
                                    <span slot="title">{{menu.name}}</span>
                                </el-menu-item>
                            </router-link>
                        </div>
                        <div v-else>
                            <router-link v-for="menu in leftBarMenu2" :to=menu.link>
                                <el-menu-item index=index>
                                    <i class="fa fa-margin fa-server"></i>
                                    <span slot="title">{{menu.name}}</span>
                                </el-menu-item>
                            </router-link>
                        </div>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {
        name: "head-nav",
        data() {
            return {
                activeIndex: '1',
                permission: 0,
                userType: 1,
                leftBarMenu: [
                    {
                        name: "我的文件",
                        link: "myfile"
                    }, {
                        name: "上传文件",
                        link: "upload"
                    }, {
                        name: '我的下载记录',
                        link: 'MyDownload'
                    }, {
                        name: '最新动态',
                        link: 'Recent'
                    }
                ],
                leftBarMenu2: [
                    {
                        name: "审核文件",
                        link: "examine"
                    }, {
                        name: "SQL模拟",
                        link: "test"
                    }
                ],
            };
        },
        created() {
            this.$axios.post("/api/user/permission").then(res => {
                // console.log(res);
                if (res.data.code == 0) {
                    // console.log(res.data.data);
                    this.permission = res.data.data.permission * 1;
                } else {
                    this.$message.error(res.data.message);
                }
            },err=>{
                // console.log(err);
            })
        },
        methods: {
            handleSelect(key, keyPath) {
                this.activeIndex = ' ' + key;
                if (key * 1 == 1) {
                    this.$router.push('/myfile');
                } else {
                    this.$router.push('/examine');
                }
            },
            logout() {
                let fd = new FormData();
                //fd.append('name', this.$name);
                //fd.append('password', this.$password);
                this.$axios.post("/api/logout", fd).then(res => {
                    if (res.data.code == 0) {
                        this.$message({message: "退出成功", type: "success"});
                    } else {
                        this.$message.error(res.data.message);
                    }
                });
                this.$user = null;
                this.$password = null;
                this.$router.push('/login');
            }
        }
    };
</script>

<style scoped>
    .head-nav {
        width: 100%;
        height: 60px;
        min-width: 600px;
        padding: 5px;
        background: #324057;
        color: #fff;
        border-bottom: 1px solid #1f2d3d;
    }

    .logo-container {
        line-height: 60px;
        min-width: 20px;
    }

    .logo {
        height: 50px;
        width: 50px;
        margin-right: 5px;
        vertical-align: middle;
        display: inline-block;
    }

    .title {
        vertical-align: middle;
        font-size: 22px;
        font-family: "Microsoft YaHei";
        letter-spacing: 3px;
    }

    .user {
        line-height: 60px;
        text-align: right;
        float: right;
        padding-right: 10px;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }

    .welcome {
        display: inline-block;
        width: auto;
        vertical-align: middle;
        padding: 0 5px;
    }

    .name {
        line-height: 20px;
        text-align: center;
        font-size: 14px;
    }

    .comename {
        font-size: 12px;
    }

    .avatarname {
        color: #409eff;
        font-weight: bolder;
    }

    .username {
        cursor: pointer;
        margin-right: 5px;
    }

    .el-dropdown {
        color: #fff;
    }

    .topbar-account {
        float: right;
        padding-right: 9pt;
        font-size: 9pt
    }

    .topbar-btn {
        color: #fff
    }

    .topbar-btn:hover {
        background-color: #58b7ff
    }

    .menu_page {
        position: fixed;
        top: 71px;
        left: 0;
        min-height: 100%;
        background-color: #324057;
        z-index: 99;
    }

    .el-menu {
        border: none;
    }

    .fa-margin {
        margin-right: 5px;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 180px;
        min-height: 400px;
    }

    .el-menu-vertical-demo {
        width: 35px;
    }

    .el-submenu .el-menu-item {
        min-width: 180px;
    }

    .hiddenDropdown,
    .hiddenDropname {
        display: none;
    }

    a {
        text-decoration: none;
    }
</style>

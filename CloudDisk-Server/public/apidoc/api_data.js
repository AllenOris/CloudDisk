define({ "api": [
  {
    "type": "post",
    "url": "/admin/examine",
    "title": "审核文件",
    "description": "<p>管理员审核文件</p>",
    "name": "admin_examine",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>用户授权cookie，管理员权限</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"cookie\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "fileId",
            "description": "<p>审核件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "isPassed",
            "description": "<p>是否同过 {0：通过，1：未通过}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"fileID\":233;\n    \"isPassed\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamsLack",
            "description": "<p>410</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Don",
            "description": "<p>'tHaveThatFile 411</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/admin/admin_examine.js",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "/file/recent",
    "title": "获取最新文件",
    "description": "<p>管理员审核文件</p>",
    "name": "admin_examine",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>用户授权cookie，管理员权限</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"cookie\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "fileId",
            "description": "<p>审核件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "isPassed",
            "description": "<p>是否同过 {0：通过，1：未通过}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"fileNum\":10;\n    \"isPassed\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamsLack",
            "description": "<p>410</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TooMuchFileRequest",
            "description": "<p>411</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/recent.js",
    "groupTitle": "api"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "wechatId",
            "optional": false,
            "field": "string",
            "description": "<p>用户名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"wechatId\":\"IdName\",\n    \"password\":\"Password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\":0,\n    \"message\":\"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginFailed",
            "description": "<p>422</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": 422,\n  \"message\": \"login failed\",\n  \"error\": [\n      {\n          \"name\": \"name\",\n          \"message\": \"might be wrong\"\n      },\n      {\n          \"name\": \"password\",\n          \"message\": \"might be wrong\"\n      }\n  ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "routes/login.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "退出登录",
    "description": "<p>退出登录</p>",
    "name": "logout",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>用户授权cookie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"cookie\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\":0,\n\"message\":\"ok\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "routes/login.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/refresh",
    "title": "刷新登录状态",
    "description": "<p>刷新登录状态</p>",
    "name": "refresh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>用户授权cookie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"cookie\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\":0,\n\"message\":\"ok\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "routes/login.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "register",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "wechatId",
            "optional": false,
            "field": "string",
            "description": "<p>用户名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"wechatId\":\"IdName\",\n    \"password\":\"Password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\":0,\n    \"message\":\"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginFailed",
            "description": "<p>422</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": 422,\n  \"message\": \"login failed\",\n  \"error\": [\n      {\n          \"name\": \"name\",\n          \"message\": \"might be wrong\"\n      },\n      {\n          \"name\": \"password\",\n          \"message\": \"might be wrong\"\n      }\n  ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "routes/register.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/file/delete",
    "title": "删除文件",
    "description": "<p>用户下载单个文件</p>",
    "name": "user_delete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>用户授权cookie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"cookie\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "fileId",
            "description": "<p>下载文件ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"fileID\":233;\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "file",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamsLack",
            "description": "<p>410</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotOwnIt",
            "description": "<p>411</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FileError",
            "description": "<p>412</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/user/user_delete.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/file/download",
    "title": "下载文件",
    "description": "<p>用户下载单个文件</p>",
    "name": "user_downlaod",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>用户授权cookie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"cookie\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "fileId",
            "description": "<p>下载文件ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"fileID\":233;\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "file",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamsLack",
            "description": "<p>410</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotOwnIt",
            "description": "<p>411</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FileError",
            "description": "<p>412</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/user/user_download.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/nfo",
    "title": "获取用户信息",
    "description": "<p>获取用户信息</p>",
    "name": "user_info",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>用户授权cookie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"cookie\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usrName",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "wechatId",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "score",
            "description": "<p>积分</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "userType",
            "description": "<p>用户类型</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\":0,\n\"message\":\"ok\",\n\"data\":{\n\"wechatId\":\"test\",\n\"score\":100,\n\"userType\":0\n}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>400</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": 400,\n  \"message\": \"bad request\",\n  \"error\": \"don't have that user\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "routes/user/user_info.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/file/upload",
    "title": "上传单个文件",
    "description": "<p>用户上传单个文件</p>",
    "name": "user_upload",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>用户授权cookie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"cookie\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>上传文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileName",
            "description": "<p>上传文件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileType",
            "description": "<p>上传文件分类</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "needScore",
            "description": "<p>所需积分</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"fileName\":\"资料.doc\",\n    \"fileType\":\"公共资源\",\n    \"needScore\":10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\":0,\n\"message\":\"ok\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "routes/user/user_upload.js",
    "groupTitle": "user"
  }
] });

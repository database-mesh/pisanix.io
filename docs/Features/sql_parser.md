<!--
 Copyright 2022 Database Mesh Authors
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

---
sidebar_position: 4
---

# SQL解析
pisanix除了理解sql协议外, 能读懂sql语句也是一个很重要的功能，读写分离，分片等功能也都依赖Sql解析，在pisanix中占着举足轻重的作用。

## 实现
为了最大的程度的兼容原生的sql语法，pisanix采用原生的[mysql语法文件](https://github.com/mysql/mysql-server/blob/8.0/sql/sql_yacc.yy)，基于`grmtools`实现了sql语法解析。
`grmtools`是一个用rust写的兼容yacc的语法解析工具，详细信息请参考[github](https://github.com/softdevteam/grmtools.git)。

## 目前状态

- [x] SELECT
- [x] INSERT
- [x] UPDATE
- [x] DELETE
- [x] PREPARE
- [x] EXECUTE
- [x] BEGIN
- [x] SET
- [ ] SHOW
- [ ] CREATE

## 测试
由于sql语句的复杂多样性，很难有有一个完整的测试集能覆盖所有可能的sql语句。
我们使用用mysql test框架中能正常运行的sql语句作为测试集来测试。
目前测试正在进行中，只测试了`SELECT`语句，`98%`的语句能成功解析, 还在不断完善中。

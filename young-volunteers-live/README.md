# Young Volunteers

独立多人实时阅读活动项目，沿用 Young Musicians 的老师端与学生端设计。

## 运行

Node.js 20+：npm install，然后 npm start。老师 /teacher.html，学生 /student.html（使用老师页复制的房间链接）。

## 课堂流程

a：老师 Example 0，不显示在学生端；b–g：每组共同完成六题 Key Idea，每题自由划线后一起提交；Text Bridge + Who：六组各负责 b–g 中一题；1↔2、3↔4、5↔6 互查与修改；h、i：个人纸质出门条。人数无上限，Expected Students 仅用于进度。

最后学生可写个人笔记并导出本组学习 PDF，老师可下载全班 PDF。纸质答案不自动录入；PDF 附完整 UTF-8 JSON 记录。导出 PDF 正文以高清页面保存，文字不直接选择复制，可从附件取原始文本。

房间数据保存在内存中，请在结束后、重开活动或服务重启前下载保存。新建 GitHub 仓库并把项目内容上传最外层，public 保持文件夹；Render 建立独立 Node Web Service（npm install / npm start）。不要上传 node_modules。

材料依据：Volunteers_Matching_IGCSE0511.docx，包括原文、Key Ideas 和题目答案。全部原文保留，证据按句编号。

# Volunteers 整课升级版

## 课堂流程
导入贡献讨论 → 词义匹配 → 词汇填空 → 两题略读 → 老师 Example 0 → 每组六题 Key Idea（b–g） → 老师 Text Bridge 示范 → 六组各一道 Text Bridge + Who → 小组互查与修改 → 60–80 词志愿岗位写作 → 六组提交 h、i 出门条 → 作业说明、个人笔记与 PDF。

学生不显示老师示范。新增活动的结果、正确答案和写作范例只在老师公布后发送给客户端。导入与写作没有唯一答案，不进行自动对错评分。词汇、略读和出门条显示六组结果与正确率榜单，同分并列；未提交不进入榜单。出门条要求 Who 与准确证据，不重复选择 Key Idea。

## 运行
Node.js 20+，npm install，然后 npm start。老师 /teacher.html，学生使用老师复制的房间链接。npm test 可运行完整课堂集成核验。

## 更新已经部署的 Volunteers（不涉及 Young Musicians）
目前 GitHub 仓库 young-volunteers-live 内有 young-volunteers-live 文件夹，Render Root Directory 已指向该文件夹。
1. 解压 volunteers-lesson-root.zip，进入 GitHub 的 young-volunteers-live/young-volunteers-live 文件夹，上传解压后的全部文件并 Commit changes。
2. 解压 volunteers-lesson-public.zip，进入上述文件夹下的 public，上传全部文件并 Commit changes。
3. 等两部分都提交后，让 Volunteers Render 服务 Deploy latest commit；不要修改 Root Directory，不要操作 Young Musicians 服务。
4. 部署成功后用 /teacher.html?update=lesson2 打开，建立新房间。不要沿用升级前未结束的活动房间。

这些新增文件也必须上传：根目录 lesson-rules.js，public/lesson-content.js 与 public/lesson-ui.js。完整包可供本地保存和独立部署，不上传 node_modules。

## 学习记录
学生 PDF 包含本人所属组的整课答案、阅读划线、证据、互查修改、写作、出门条和个人笔记；老师 PDF 包含全班记录及出门条排名。PDF 采用高清页面，附 UTF-8 JSON 原始数据。房间数据暂存内存，请在重开活动或服务重启前下载保存。

资料依据：Organizations_Volunteers_IGCSE0511 - 副本.pptx 与 Volunteers_Matching_IGCSE0511.docx。没有修改原来的 Young Musicians 项目，也没有自动更新线上 Volunteers。

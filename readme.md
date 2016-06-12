 #learngit
  
# 安装及创建git
 1. git 查看系统是否安装git 
	> $ git config --global user.name "Your Name"
	> $ git config --global user.email "email@example.com"
	> 注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

 2. git init 初始化一个Git仓库
  	>添加文件到Git仓库，分两步： 
	>第一步，使用命令git add <file>，注意，可反复多次使用，添加多个文件； 
	>第二步，使用命令git commit，完成。

# git版本库的常用命令 
 1. git status 查看工作区的状态
 2. git diff HEAD -- readme.txt  可以查看工作区和版本库里面最新版本的区别    
 3. git log  查看操作历史记录  或者用 git log --pretty=oneline查看整洁的历史记录
 4. git reset --hard  head^ 回退上一个版本，上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。“head”可以替换成指定版本的id号最少4位 回退之后如果后悔了就用第五git reflog命令查看所有commit的id 再通过 git reset --hard “id号”     reset还可以把暂存区的修改撤销掉（unstage），重新放回工作区：
 5. git reflog 查看所有操作状态码也就是每次commit的id号
 6. git checkout -- file （相当于操作系统的回退功能ctrl+z 一键还原）可以丢弃工作区的修改 命令中的--很重要，没有--，就变成了“切换到另一个分支”的命令
	一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态； 
	一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。 
	总之，就是让这个文件回到最近一次git commit或git add时的状态。
 7. git rm test.txt 用于删除一个文件
 
 # 连接远程库
     在这里先啰嗦几句，按道理可以自己搞一个单独的服务器来供我们使用远程连接，但是呢现在有了一个github这么一个代码托管库我们就拿这个做例子咯，要连接github栗子库要做两件事 
 第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一 步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：$ ssh-keygen -t rsa -C "youremail@example.com" 
 
 第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容：
 为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。 
 
 1. git remote add origin git@github.com:heimao/learngit.git 把本的的仓库关联到我远程的库上（前提是你要在github上有这个仓库才可以的哦哦）heimao切记改成你的仓库地址要不连接的是我的github地址
 2. git push -u origin master 把本地库推送到我远程关联的仓库里边，由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。推送一次之后就可以用git push origin master推送最新修改了。
   提示关联和clone第一次都都会出现ssh警告输入yes即可，告诉你已经把GitHub的Key添加到本机的一个信任列表里了 
 3. git clone 命令克隆地址可以是github地址也可以是你搭建的服务器地址
 
# 关于分支的命令用到的命令
 1. git branch 查看分支
 2. git branch -b dev 创建分支并切换到dev的分之上  -b指的是并切换
 3. git branch -d dev 删除指定的分支
 4. git branch merge dev 把dev分支合并到当前的分支上












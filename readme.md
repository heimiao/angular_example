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
 4. git remote 查看远程库的信息 或者，用git remote -v显示更详细的信息：
 5. git push origin master 推送分支，就是把该分支上的所有本地提交推送到远程库。如果要推送其他分支，比如dev，就改成：git push origin dev
 6. git checkout -b dev origin/dev 就必须创建远程origin的dev分支到本地 (当你的小伙伴从远程库clone时，默认情况下，你的小伙伴只能看到本地的master分支。现在，你的小伙伴要在dev分支上开发，就必须创建远程origin的dev分支到本地，于是他用这个命令创建本地dev分支。)
 7. git pull 远程拉取代码，git pull失败了，原因是没有指定本地dev分支与远程origin/dev分支的链接，根据提示，设置dev和origin/dev的链接：git branch --set-upstream dev origin/dev git pull成功，但是合并有冲突，需要手动解决，解决的方法和分支管理中的解决冲突完全一样。解决后，提交，再push
    因此，多人协作的工作模式通常是这样：

    首先，可以试图用git push origin branch-name推送自己的修改；

    如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；

    如果合并有冲突，则解决冲突，并在本地提交；

    没有冲突或者解决掉冲突后，再用git push origin branch-name推送就能成功！

如果git pull提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream branch-name origin/branch-name。

这就是多人协作的工作模式，一旦熟悉了，就非常简单。	
# 关于分支的命令用到的命令
 1. git branch 查看分支
 2. git checkout -b dev 创建分支并切换到dev的分之上  -b指的是并切换
 3. git branch -d dev 删除指定的分支  某分支分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用命令git branch -D feature-vulcan。
 4. git branch merge dev 把dev分支合并到当前的分支上   准备合并dev分支，请注意--no-ff参数，表示禁用Fast forward：这样，从分支历史上就可以看出分支信息。
 5. git stash 隐藏某个分支上当前工作状态
 5. git stash list 查看所有被隐藏的工作状态列表（当修改bug的时候需要隐藏当前工作的状态，临行创建分支然后合并最后删除）
 6. git stash apply stash@{0}   git stash apply恢复，但是恢复后，stash内容并不删除，你需要用git stash drop来删除，另一种方式是用git stash pop，恢复的同时把stash内容也删了。
 7. 











 #learngit
  
# ��װ������git
 1. git �鿴ϵͳ�Ƿ�װgit 
	> $ git config --global user.name "Your Name"
	> $ git config --global user.email "email@example.com"
	> ע��git config�����--global���������������������ʾ����̨���������е�Git�ֿⶼ��ʹ��������ã���ȻҲ���Զ�ĳ���ֿ�ָ����ͬ���û�����Email��ַ��

 2. git init ��ʼ��һ��Git�ֿ�
  	>����ļ���Git�ֿ⣬�������� 
	>��һ����ʹ������git add <file>��ע�⣬�ɷ������ʹ�ã���Ӷ���ļ��� 
	>�ڶ�����ʹ������git commit����ɡ�

# git�汾��ĳ������� 
 1. git status �鿴��������״̬
 2. git diff HEAD -- readme.txt  ���Բ鿴�������Ͱ汾���������°汾������    
 3. git log  �鿴������ʷ��¼  ������ git log --pretty=oneline�鿴�������ʷ��¼
 4. git reset --hard  head^ ������һ���汾����һ���汾����HEAD^������һ���汾����HEAD^^����Ȼ����100���汾д100��^�Ƚ�������������������д��HEAD~100����head�������滻��ָ���汾��id������4λ ����֮���������˾��õ���git reflog����鿴����commit��id ��ͨ�� git reset --hard ��id�š�     reset�����԰��ݴ������޸ĳ�������unstage�������·Żع�������
 5. git reflog �鿴���в���״̬��Ҳ����ÿ��commit��id��
 6. git checkout -- file ���൱�ڲ���ϵͳ�Ļ��˹���ctrl+z һ����ԭ�����Զ������������޸� �����е�--����Ҫ��û��--���ͱ���ˡ��л�����һ����֧��������
	һ����readme.txt���޸ĺ�û�б��ŵ��ݴ��������ڣ������޸ľͻص��Ͱ汾��һģһ����״̬�� 
	һ����readme.txt�Ѿ���ӵ��ݴ������������޸ģ����ڣ������޸ľͻص���ӵ��ݴ������״̬�� 
	��֮������������ļ��ص����һ��git commit��git addʱ��״̬��
 7. git rm test.txt ����ɾ��һ���ļ�
 
 # ����Զ�̿�
     �������Ȇ��¼��䣬����������Լ���һ�������ķ�������������ʹ��Զ�����ӣ���������������һ��github��ôһ�������йܿ����Ǿ�����������ӿ���Ҫ����github���ӿ�Ҫ�������� 
 ��1��������SSH Key�����û���Ŀ¼�£�������û��.sshĿ¼������У��ٿ������Ŀ¼����û��id_rsa��id_rsa.pub�������ļ�������Ѿ����ˣ���ֱ��������һ �������û�У���Shell��Windows�´�Git Bash��������SSH Key��$ ssh-keygen -t rsa -C "youremail@example.com" 
 
 ��2������½GitHub���򿪡�Account settings������SSH Keys��ҳ��Ȼ�󣬵㡰Add SSH Key������������Title����Key�ı�����ճ��id_rsa.pub�ļ������ݣ�
 ΪʲôGitHub��ҪSSH Key�أ���ΪGitHub��Ҫʶ��������͵��ύȷʵ�������͵ģ������Ǳ���ð��ģ���Git֧��SSHЭ�飬���ԣ�GitHubֻҪ֪������Ĺ�Կ���Ϳ���ȷ��ֻ�����Լ��������͡� 
 
 1. git remote add origin git@github.com:heimao/learngit.git �ѱ��ĵĲֿ��������Զ�̵Ŀ��ϣ�ǰ������Ҫ��github��������ֿ�ſ��Ե�ŶŶ��heimao�мǸĳ���Ĳֿ��ַҪ�����ӵ����ҵ�github��ַ
 2. git push -u origin master �ѱ��ؿ����͵���Զ�̹����Ĳֿ���ߣ�����Զ�̿��ǿյģ����ǵ�һ������master��֧ʱ��������-u������Git������ѱ��ص�master��֧�������͵�Զ���µ�master��֧������ѱ��ص�master��֧��Զ�̵�master��֧�������������Ժ�����ͻ�����ȡʱ�Ϳ��Լ��������һ��֮��Ϳ�����git push origin master���������޸��ˡ�
   ��ʾ������clone��һ�ζ��������ssh��������yes���ɣ��������Ѿ���GitHub��Key��ӵ�������һ�������б����� 
 3. git clone �����¡��ַ������github��ַҲ���������ķ�������ַ
 4. git remote �鿴Զ�̿����Ϣ ���ߣ���git remote -v��ʾ����ϸ����Ϣ��
 5. git push origin master ���ͷ�֧�����ǰѸ÷�֧�ϵ����б����ύ���͵�Զ�̿⡣���Ҫ����������֧������dev���͸ĳɣ�git push origin dev
 6. git checkout -b dev origin/dev �ͱ��봴��Զ��origin��dev��֧������ (�����С����Զ�̿�cloneʱ��Ĭ������£����С���ֻ�ܿ������ص�master��֧�����ڣ����С���Ҫ��dev��֧�Ͽ������ͱ��봴��Զ��origin��dev��֧�����أ���������������������dev��֧��)
 7. git pull Զ����ȡ���룬git pullʧ���ˣ�ԭ����û��ָ������dev��֧��Զ��origin/dev��֧�����ӣ�������ʾ������dev��origin/dev�����ӣ�git branch --set-upstream dev origin/dev git pull�ɹ������Ǻϲ��г�ͻ����Ҫ�ֶ����������ķ����ͷ�֧�����еĽ����ͻ��ȫһ����������ύ����push
    ��ˣ�����Э���Ĺ���ģʽͨ����������

    ���ȣ�������ͼ��git push origin branch-name�����Լ����޸ģ�

    �������ʧ�ܣ�����ΪԶ�̷�֧����ı��ظ��£���Ҫ����git pull��ͼ�ϲ���

    ����ϲ��г�ͻ��������ͻ�����ڱ����ύ��

    û�г�ͻ���߽������ͻ������git push origin branch-name���;��ܳɹ���

���git pull��ʾ��no tracking information������˵�����ط�֧��Զ�̷�֧�����ӹ�ϵû�д�����������git branch --set-upstream branch-name origin/branch-name��

����Ƕ���Э���Ĺ���ģʽ��һ����Ϥ�ˣ��ͷǳ��򵥡�	
# ���ڷ�֧�������õ�������
 1. git branch �鿴��֧
 2. git checkout -b dev ������֧���л���dev�ķ�֮��  -bָ���ǲ��л�
 3. git branch -d dev ɾ��ָ���ķ�֧  ĳ��֧��֧��û�б��ϲ������ɾ��������ʧ���޸ģ����Ҫǿ��ɾ������Ҫʹ������git branch -D feature-vulcan��
 4. git branch merge dev ��dev��֧�ϲ�����ǰ�ķ�֧��   ׼���ϲ�dev��֧����ע��--no-ff��������ʾ����Fast forward���������ӷ�֧��ʷ�ϾͿ��Կ�����֧��Ϣ��
 5. git stash ����ĳ����֧�ϵ�ǰ����״̬
 5. git stash list �鿴���б����صĹ���״̬�б����޸�bug��ʱ����Ҫ���ص�ǰ������״̬�����д�����֧Ȼ��ϲ����ɾ����
 6. git stash apply stash@{0}   git stash apply�ָ������ǻָ���stash���ݲ���ɾ��������Ҫ��git stash drop��ɾ������һ�ַ�ʽ����git stash pop���ָ���ͬʱ��stash����Ҳɾ�ˡ�
 7. 











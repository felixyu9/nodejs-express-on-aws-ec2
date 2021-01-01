# nodejs-express-on-aws-ec2

This repo hosts the source code for my YouTube tutorial on CI/CD from Github to an AWS EC2 instance via CodePipeline and CodeDeploy (https://www.youtube.com/watch?v=Buh3GjHPmjo). This tutorial uses a node.js express app as an example for the demo.

I also created a video to talk about how to fix some of the common CodeDeploy failures I have run into (https://www.youtube.com/watch?v=sXZVkOH6hrA). Below are a couple of examples:

```
ApplicationStop failed with exit code 1
```

```
The overall deployment failed because too many individual instances failed deployment, too few healthy instances are available for deployment, or some instances in your deployment group are experiencing problems.
```

===========================

EC2 script on creation to install the CodeDeploy Agent:

```
#!/bin/bash
sudo yum -y update
sudo yum -y install ruby
sudo yum -y install wget
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto
```

Check if CodeDeploy agent is running:
```
sudo service codedeploy-agent status
```

Location for CodeDeploy logs:
```
/opt/codedeploy-agent/deployment-root/deployment-logs/codedeploy-agent-deployments.log
```

Uninstall CodeDeploy Agent:
```
sudo yum erase codedeploy-agent
```
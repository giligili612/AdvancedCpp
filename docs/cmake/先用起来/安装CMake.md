# 安装CMake

本教程尽量少些废话，就不介绍CMake的历史和优点了。各位既然点进本文档我就默认各位知道CMake是干嘛的以及CMake的优势。

## Linux系统

### 官方仓库安装

```bash
sudo apt update
sudo apt install g++ make ninja-build libssl-dev
sudo apt install cmake
```

安装完后

```bash 
cmake --version
```

应该会打印版本信息。


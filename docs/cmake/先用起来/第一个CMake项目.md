# 第一个CMake项目

各位可以专门开一个文件夹用以存放学习CMake的各个项目。

## 创建目录及项目

```bash
mkdir first_cmake
cd first_cmake
```

在first_cmake文件夹下创建两个文件，总体结构如下

```text
/first_cmake
  first_cmake.cpp
  CMakeLists.txt
```

注意，`CMakeLists.txt` 字母大小写和标点符号要一字不差！

## 编写cpp文件和CMakeLists.txt

::: code-group

```cpp[first_cmake.cpp]
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello CMake\n";
    return 0; 
}
```

```cmake[CMakeLists.txt]
# 指定cmake版本
cmake_minimum_required(VERSION 3.20)

# 构建项目名称
project(first_cmake LANGUAGES C CXX)

# 构建执行程序
add_executable(first_cmake first_cmake.cpp)
```
:::

## CMake的基础
- 指定CMake最低版本：用CMake管理项目**第一件要做的事情**就是指定CMake的最低版本
  - `cmake_minimum_required(VERSION x.y.z)`:x是大版本，y是小版本，z是小版本中的小更新，数字都是越大越新。
  - 如何比较哪个版本更新？先比较大版本，再比较小版本，最后比较小更新。找到第一个不同之处，数字更大的更新
  - 整个项目一般只指定一次CMake的最低版本，即在项目的根目录下的CMakeLists.txt中指定，子目录的CMake一概不指定
- 指定项目名称：`project(项目名 LANGUAGES C CXX)`，不要误以为这是VS中的项目，实际上这里应该把project理解为VS的解决方案。后面的参数指明项目是用C和C++构建的
- 可执行程序：`add_executable(程序名 程序源代码集)`,这是你实际运行的程序。这里我们用first_cmake.cpp编译生成了可执行文件first_cmake

## 编译运行
我们的shell在项目根目录/first_cmake下，敲入如下命令：
```bash
cmake -S . -B build
```
命令解析：`cmake -S <sources> -B <build>`，`-S`指定源文件所在位置，此处用`.`代表源文件就在CMakeLists.txt的当前目录，`-B`指定构建目录，此处用`build`，这里默认是相对路径，也就是当前文件夹下的build文件夹，如果我们没有创建build文件夹cmake会帮我们创建并把构建项目用的东西都丢进去

之后继续敲入如下命令
```bash
cmake --build build
```
命令解析：`cmake --build <build_source>`，这里用`--build`指示构建的资源存放在`build`目录下，同时执行构建程序的命令
执行完上面的命令后项目就编译构建完成了。现在可以运行程序了，该程序就放在build文件夹下
```bash
./build/first_cmake 
Hello CMake
```

现在你大概知道怎么做了，那么上面的每一步具体在干嘛呢？上面的两个命令分别对应了CMake的构建流程中的两步：
- 配置与生成：`cmake -S . -B build`
  - 功能：分析项目结构，检查依赖，生成构建系统文件（如Makefile）。
  - 类比：像是为建房子画好了所有的设计图纸和施工计划。
- 构建：`cmake --build build`
  - 功能：根据上一步生成的“图纸”，调用编译器/链接器，编译源代码，生成最终的可执行文件或库。
  - 类比：施工队根据图纸开始真正砌墙、盖楼。

## 总结
- 创建源文件与CMakeLists.txt，CMakeLists.txt的命名非常严格
- `cmake_minimum_required`
- `project`
  - `LANGUAGES C CXX`
- `add_executable`
  - 程序名
  - 源文件集合
- `cmake -S . -B build`
  - 指定源文件地址
  - 指定构建目录地址
  - build里放的是施工图纸
- `cmake --build build`
  - 根据build里的施工图纸开始施工
  - 构建出来的可执行程序也放在build里
# IP地址转换函数

```c
#include <arpa/inet.h>
// 字符串->网络地址
int inet_pton(int af, const char *restrict src, void *restrict dst);
```
- `af`: 地址族，指定IPv4还是IPv6
- `src`: 指向点分十进制的字符串的指针
- `dst`: 指向存储网络地址的结构体的指针
- 返回值：成功则返回1，返回0代表src指向的字符串地址不合法，返回-1代表地址族不合法

```c
#include <arpa/inet.h>
// 网络地址->字符串
const char *inet_ntop(int af, const void *restrict src,
                             char dst[restrict .size], socklen_t size);
```
- `src`：指向存储网络地址的结构体的指针
- `dst`：转换的字符串结果存储到dst数组中
- `size`：指定dst缓冲区的大小
- 返回值：成功则返回指向dst的指针，失败则返回NULL


以下是Linux manual官方示例程序
```c
#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
    unsigned char buf[sizeof(struct in6_addr)];
    int domain, s;
    char str[INET6_ADDRSTRLEN];

    if (argc != 3) {
        fprintf(stderr, "Usage: %s {i4|i6|<num>} string\n", argv[0]);
        exit(EXIT_FAILURE);
    }

    domain = (strcmp(argv[1], "i4") == 0) ? AF_INET :
    (strcmp(argv[1], "i6") == 0) ? AF_INET6 : atoi(argv[1]);

    s = inet_pton(domain, argv[2], buf);
    if (s <= 0) {
        if (s == 0)
            fprintf(stderr, "Not in presentation format");
        else
            perror("inet_pton");
        exit(EXIT_FAILURE);
    }

    if (inet_ntop(domain, buf, str, INET6_ADDRSTRLEN) == NULL) {
        perror("inet_ntop");
        exit(EXIT_FAILURE);
    }

    printf("%s\n", str);

    exit(EXIT_SUCCESS);
}
```

> p是presentation，即“表示形式”，此处为人类可读的字符串格式

> 还有些OldSchool的函数可能在维护旧代码的时候需要使用，各位可自行查阅手册或者阅读相关书籍。写新代码时可以统一使用上面的两个函数
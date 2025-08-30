# socket地址结构
## 通用地址结构sockaddr
```c
#include <sys/socket.h>
struct sockaddr {
    sa_family_t     sa_family;      /* Address family */
    char            sa_data[];      /* Socket address */
};
```
- `sa_family_t`: 底层是一个unsigned integer，用来标识协议族
- `sa_data`：用于存放socket地址值，不同的协议族对该数组的解释不同

## IPv4和IPv6地址结构
```c
#include <netinet/in.h>
// IPv4
struct sockaddr_in {
    sa_family_t     sin_family;     /* AF_INET */
    in_port_t       sin_port;       /* Port number */
    struct in_addr  sin_addr;       /* IPv4 address */
};
// IPv6
struct sockaddr_in6 {
    sa_family_t     sin6_family;    /* AF_INET6 */
    in_port_t       sin6_port;      /* Port number */
    uint32_t        sin6_flowinfo;  /* IPv6 flow info */
    struct in6_addr sin6_addr;      /* IPv6 address */
    uint32_t        sin6_scope_id;  /* Set of interfaces for a scope */
};
```

这里混个脸熟即可，后面随着使用的越来越多会自然理解的。有关地址结构的更多信息读者可自行查阅手册
```bash
man sockaddr
```
## 速降函数
称一个 $\R\to \R$ 的函数是速降的, 如果它是光滑的, 且对任意的正数 $p$ 和正整数 $q$ 有: 
$$
\sup_{x\in \R} |x|^p\cdot \left|\left(\frac{\mathrm{d}}{\mathrm{d}x}\right)^qf(x)\right|<\infin
$$
## Fourier变换
$$
(\mathtt{fourier}\;f)(\xi):=\int_{-\infin}^{+\infin} f(x)\cdot \exp(-2\pi i \xi x)\mathrm{\,d}x
$$
## Fourier变换的性质
$$
\int_{-\infin}^{+\infin}f'(x)\cdot\exp(-2\pi i\xi x){\,\rm d}x=2\pi i\xi\cdot (\mathtt{fourier}\;f)(\xi)
$$
## 半平面的热平衡方程
令 $u(x, y)$ 表示点 $(x,y)$ 处的温度分布(其中点 $(x,y)\in \R\times [0, \infin)$), 并假设其处于平衡状态, 则有偏微分方程: 
$$
\begin{aligned}
\left(\left(\frac{\partial }{\partial x}\right)^2+\left(\frac{\partial }{\partial y}\right)^2\right)\cdot u(x,y)&=0\\
u(x,0)&=f(x)
\end{aligned}
$$
在这一问题中, 对第一个entry作Fourier变换, 即令
$$
\hat u(\xi, y) = \int_{-\infin}^{+\infin} u(x,y)\cdot \exp(-2\pi i\xi x)\,\mathrm{d}x\\
$$
对原方程左边作同样的变换, 有: 
$$
\begin{aligned}
& \int_{-\infin}^{+\infin} \left(\left(\frac{\partial }{\partial x}\right)^2\cdot u(x,y)+\left(\frac{\partial }{\partial y}\right)^2\cdot u(x,y)\right)\cdot \exp(-2\pi i\xi x)\,{\rm d}x\\
& = \bigg((2\pi i\xi)^2+(\frac{\partial}{\partial y})^2\bigg)\cdot \hat u(\xi, y)
\end{aligned}
$$
这样解就很明确了. 
$$
(\frac{\partial}{\partial y})^2\cdot \hat{u}(\xi, y)=4\pi^2\xi^2\cdot \hat{u}(\xi, y)
$$
有
$$
\hat{u}(\xi, y)=A(\xi)\cdot\exp (-2\pi|\xi| y)+B(\xi)\cdot\exp(2\pi|\xi| y)
$$
注意到对给定的 $\xi \ne 0$ , $\hat u(\xi, y)$ 对 $y$ 不是速降函数, 故 $B(\xi)=0$ . 
令 $y = 0$ , 则有 $\hat{u}(\xi, 0) = \hat{f}(\xi) = A(\xi)\cdot\exp(-2\pi|\xi|0)$ . 故 $\hat{f}(\xi) = A(\xi)$ . 
而
$$
u(x,y)=\int_{-\infin}^{+\infin} \hat{f}(\xi)\cdot \exp(-2\pi|\xi|y)\cdot \exp(2\pi i\xi x)\cdot {\rm d}\xi
$$

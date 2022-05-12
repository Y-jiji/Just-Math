---
TimeLine: 
=> 20220328--20220331 : 添加了集合的运算, 幂集, 和ZFC模型的内容
=> 20220512--20220000 : 分拆映射的部分
---

| #已完成-正文 | #未完成-习题 | #TODO | #UNFIXED | 
| ------------ | ------------ | ----- | -------- |

# ZFC公理系统
> 本章旨在通过各种构造将全部的数学对象都变成集合(除了谓词), 包括映射也是一种集合. 


## ::MACRO

| IMPORT                                   | DESCRIPTION                            |
| ---------------------------------------- | -------------------------------------- |
| [谓词的定义](逻辑-量词和谓词#谓词的定义) | 谓词的类型签名 $\text{<n-props>}$      |
| [映射谓词](逻辑-量词和谓词#映射谓词)     | 映射谓词的类型签名 $\text{<fn-props>}$ |

## 集合, 属于谓词

集合不是一个一阶逻辑的概念, 它描述了一种特殊的数学对象, 这个数学对象收集了任何满足某个谓词的对象. 如此一来, 我们就能够用 $\in$ 记号来重述这个谓词, 并通过研究这些集合来研究谓词. 

这种研究数学对象性质的方法被称为概括原理. 

$$
(\in),\{:\}::
    \forall \phi\text{<1-props>}:\forall x:x\in \{t:\phi(t)\}
    \Leftrightarrow \phi(x)
$$

另外再定义一个谓词来表示不属于关系. 

$$
(\notin)::a\notin b\Leftrightarrow \neg (a\in b)
$$

有时为了描述有限个元素的集合, 记号 $\{:\}$ 就显得有些不便, 此时用列举法来描述一个集合. 

$$
\{a(1),a(2),\cdots,a(n)\}:=\left\{x:\bigvee_{t=1}^n (x=a(t))\right\}
$$

另有约定, 若$\text<\phi\text>$ 是一后缀谓词, 则 $\{x\text<\phi\text>:\cdots\}$ 理解为 $\{x:x\text<\phi\text>\and \cdots\}$

另有一个集合表示没有元素处于其中. 

$$
\varnothing := \{\}
$$

## 集合的运算

集合之间有几类基本的运算
$$
\begin{aligned}
    & A \sube B:= \forall x\in A:x\in B\\\\
    & A \cup B := \{x:x\in A\or x\in B\}\\
    & A \cap B := \{x:x\in A\and x\in B\}\\\\
    & A \diagdown B := \{x:x\in A\and x \notin B\}\\
    & A \triangle B:= \{x:x\in A \oplus x\in B\}\\
\end{aligned}
$$

另外, 还有两种较难表述的运算, 分别是多个集合的并和多个集合的交, 其形式化如下. 

多个集合的并相当于是有限个集合并的推广(考虑存在和或之间的类比)
$$
\bigcup\limits_{a\in A} a:=\{x:\exist a\in A:x\in a\}
$$
多个集合的交相当于是有限个集合交的推广(考虑任意和与之间的类比)
$$
\bigcap\limits_{a\in A} a:=\{x:\forall a\in A:x\in a\} 
$$

## 幂集的定义

幂集是指一个集合的全部子集的集合. 之所以称为幂集, 是因为在有限维情况下, 它的元素的个数恰为 $2$ 的原集合元素个数次幂. 

$$
\Pow(X):=\{A:A\sube X\}
$$

## Russell悖论

上述关于集合的记号并非是良定义的, Russell就提出过一个反例. 

$$
\Field{\;\;}{\;\;}{
    & K:=\{T:T\notin T\}\\
    & \Field{(\and)}{\;\;}{
        & K\in K\Rightarrow K\notin K\\
        & K\notin K\Rightarrow K\in K\\
    }
}
$$

RMK : 为了屏蔽这种悖论提出了ZFC公理系统

## ZFC集合模型

ZFC集合模型(ZFC公理系统)限制了集合的定义, 使得Russell悖论在这个系统当中能被避免. 

第一条公理定义了集合的同一性, 而后几条公理的作用都是给出构造集合的办法. (第三条无穷公理也是一种构造的办法) 

第八条公理被称为正则公理, 它通过限制集合必须含有对属于关系最小的元素来避免悖论. 

最后一条公理通常被认为独立于Zermelo-Fraenkel最初的构造, 单独被称为选择公理, 表明对任何一个每个元素都非空的集合, 总能有一个映射能够从每个元素当中挑出一个它的元素. 

$$
\begin{matrix}
\text{<set>}
::
\Field{(\and)}{\;\;}{
    \\
    & \forall A,B\text{<set>}:
        \Field{(\Leftrightarrow)}{\;\;}{
             & A=B\\
             & \forall x:(x\in A)\Leftrightarrow (x\in B)\\
        }
        & \cdots(\text{ZF}-1) \\
    \\
    & \forall A,B\text{<set>}:\{A,B\}\text{<set>}
        & \cdots(\text{ZF}-2) \\
    \\
    & \exist X\text{<set>}: 
        \forall x \in X:
            x\cup\{x\}\in X
        & \cdots(\text{ZF}-3) \\
    \\
    & \forall A\text{<set>}:
        \{a:\exist {\mathscr A}\in A:a\in {\mathscr A}\}\text{<set>}
        & \cdots(\text{ZF}-4) \\
    \\
    & \forall A\text{<set>}:
        \forall \phi\text{<fn-props>}:
        \{y:\exist x\in A:\phi(x,y)\}\text{<set>}
        & \cdots(\text{ZF}-5) \\
    \\
    & \forall A\text{<set>}: \Pow(A)\text{<set>}
        & \cdots(\text{ZF}-6) \\
    \\
    & \forall A\text{<set>}:
        \forall \phi\text{<1-props>}:
        \{a:a\in A\and \phi(a)\}\text{<set>}
        & \cdots(\text{ZF}-7) \\
    \\
    & \forall A\text{<set>}:
        \exist m \in A: 
        \nexists a\in A:
        a\in m
        & \cdots(\text{ZF}-8) \\
    \\
    & \forall A\text{<set>}:
    \Field{(\Rightarrow)}{\;\;}{
        & \CondBegin\\
        & \forall a\in A:\exist t\in a\\
        & \CondEnd\\
        & \exist \phi\text{<2-props>}:
            \forall a\in A: \exist! b\in a: \phi(a,b)
    }
    & \cdots(\text{C}) \\
    \\
}
\end{matrix}
$$

RMK: 

容易发现一些常规运算在ZFC框架下都是可以运行的, 例如集合的并 $A\cup B$ , 可以略微迂回地描述为 $\{A, B\}$ 中全部元素的交集. ( 使用 ${\rm ZF - 2}$ 和 ${\rm ZF - 4}$ )

至于交集与差集则可描述为 $A$ 被一命题框定的某个子集, 因此也能运行在这个框架下. ( 使用 ${\rm ZF - 7}$ )

多个集合的交也可用 ${\rm ZF-7}$ 来描述. 

## 元组, 直积

在ZFC公理系统的框架下元组是通过第二条公理构造的. (类似Haskell语言中的列表构造方法)

$$
\begin{matrix}
(A,B):=\{A,\{A,B\}\}\\
:::A,B\text{<set>}
\end{matrix}
$$

易知元组构造不满足交换律或结合律, 引入下面的运算表示多元元组.  

$$
\begin{matrix}
(A, B, \cdots) := \{A, \{A, \{B, \{B, \cdots\}\}\}\}\\
:::A,B,\cdots\text{<set>}
\end{matrix}
$$

直积则是指元素的元组的集合, 注意严格来讲直积并不满足交换律, 默认直积是右结合的. 

$$
\begin{matrix}
A\times B := \{(a,b):a\in A\and b\in B\}\\
:::A,B\text{<set>}
\end{matrix}
$$

直积运算的合法性可以通过如下构造来验证

$$
\FieldEndl{
    & \forall A, B\text{<set>}:(\Rightarrow)
}{\;\;}{
    & \CondEnd\\
    & C:=\{\{a, b\}: a\in A \and b\in B\}\\
    \\
    & C \sube \Pow(A \cup B)\\
    & C\text{<set>}\\
    \\
    & (A\times B) \sube \Pow(A \cup C)\\
    & (A\times B)\text{<set>}
}
$$

## 映射的定义

另有一说映射可以看作两个集合直积的子集. 映射使得对任意 $X$ 中元素 $x$ , 总有唯一 $Y$ 中元素 $y$ , 使得 $(x, y) \in E$. 
规定下述的 $\rightarrow$ 运算是右结合的. 

$$
\begin{matrix}
(f:X \to Y) := \Field{(\and)}{\;\;}{
    & X,Y\text{<set>}\\
    & f\in \Pow(X\times Y): \forall x\in X:\exist! y\in Y: (x, y)\in f\\
}\\
\end{matrix}
$$

特规定映射的赋值运算为

$$
\begin{matrix}
f(x) :: (x,f(x))\in f\\
:::\exist X,Y\text{<set>}:(f : X\to Y)\and(x\in X)
\end{matrix}
$$

特别地, 如果一个映射的定义域是两个集合的直积, 称这个映射为这两个集合中元素间的二元运算, 赋值时写作中缀形式. 

映射的限制是指减小映射定义域的运算. 

$$
\begin{matrix}
f \big|_{Z} := \{(z, f(z)): z\in Z\}\\
:::\exist X,Y\text{<set>}:(f:X \to Y)\and(Z\in \Pow(X))
\end{matrix}
$$

集映射是指对一个映射做变换使得它变为其定义域的幂集上的映射. 

$$
\begin{matrix}
\hat f::\Field{(\and)}{\;\;}{
    & (X, Y):: f:X\to Y\\
    & \hat f:\Pow(X)\to \Pow(Y)\\
    & \hat f(E) = \{f(x): x\in E\}\\
}\\
::: \exist X,Y\text{<set>}:f:X\to Y
\end{matrix}
$$

## 单射, 逆映射

单射是使得不同元素映射到不同值的映射. 

$$
\begin{matrix}
f\text{<inj>} :: \Field{(\and)}{\;\;}{
    & X :: \exist Y: f: X\to Y\\
    & f(x) = f(y) \Rightarrow x = y
}\\
:: \exist X, Y\text{<set>}: f: X\to Y 
\end{matrix}
$$

逆映射是定义在值域上的映射, 这里用一种取巧的方法来定义, 可能在有些情况下很难解释其含义, 需要慎用. 

$$
\begin{matrix}
f^{\diamond -} :: \Field{(\and)}{\;\;}{
    & X :: \exist Y: f: X\to Y\\
    & f^{\diamond -}: \hat f (X) \to X\\
    & f^{\diamond -}(y) = \bigcup_{x\in X\and f(x) = y} x
}\\
:: \exist X, Y\text{<set>}: f: X\to Y
\end{matrix}
$$

## 映射的复合

映射复合的符号用菱形算符表示. 

$$
\begin{matrix}
f\diamond g :: \Field{(\and)}{\;\;}{
    & X,Y:: f:X\to Y\\
    & Z,W:: g:Z\to W\\
    & (f \diamond g) : X \to W\\
    & \forall x\in X: f(x) \in Z \Rightarrow f \diamond g (x) = f (g(x))
}\\
::: \exist X, Y\text{<set>}: f: X \to Y\\
::: \exist Z, W\text{<set>}: g: Z\to W\\
\end{matrix}
$$

## 单位映射

$$
\begin{matrix}
\text{id}(E) := \{(e, e): e\in E\}\\
::: E \text{<set>}
\end{matrix}
$$

## Grothendieck 宇宙

最后要讲述一下Grothendieck宇宙的概念, 它是一个被假设存在的概念, 使得在代数研究当中能够描述足够大的范畴. 

$$
\text{<u-set>}:=\forall\, {\cal U}\text{<u-set>}:
\Field{(\and)}{\;\;}{
    & \forall u\in {\cal U}: u \sube {\cal U}\\
    & \forall u, v\in {\cal U}: \{u, v\} \in {\cal U}\\
    & \forall u\in {\cal U}: \Pow(u)\in {\cal U}\\
    & \forall U\in \Pow({\cal U}): \bigcup_{u\in U} u \in {\cal U}\\
    & \varnothing\in {\cal U}\\
}
$$

另外, 我们假设

$$
\forall S\text{<set>}: \exist\, {\cal U}\text{<u-set>}: S\in {\cal U}
$$

---
TimeLine: 
=> 20220328--20220331 : 添加了集合的运算, 幂集, 和ZFC模型的内容
---

| #已完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# ZFC公理系统

## ::MACRO

| IMPORT                                   | DESCRIPTION                       |
| ---------------------------------------- | --------------------------------- |
| [谓词的定义](逻辑-量词和谓词#谓词的定义) | 谓词的类型签名 $\text{<n-props>}$ |
| [映射谓词](逻辑-量词和谓词#映射谓词)                                         |      映射谓词的类型签名 $\text{<fn-props>}$                             |


## 集合的定义

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

有时为了描述有限个元素的集合, 记号 $\{:\}$ 就显得有些不便, 此时用所谓的列举法来描述一个集合. 

$$
\{a(1),a(2),\cdots,a(n)\}:=\left\{x:\bigvee_{t=1}^n (x=a(t))\right\}
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
	{\frak P}(X):=\{A:A\sube X\}
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
	& \forall A\text{<set>}: {\frak P}(A)\text{<set>}
		& \cdots(\text{ZF}-6) \\
	\\
	& \forall A\text{<set>}:
		\forall \phi\text{<props>}:
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
		& \exist \phi:
			\forall a\in A: \exist! b\in a: \phi(a,b)
	}
	& \cdots(\text{C}) \\
	\\
}
\end{matrix}
$$

## 元组, 直积

在ZFC公理系统的框架下元组是通过第二条公理构造的. (类似Haskell语言中的列表构造)

$$
\begin{matrix}
(A,B):=\{A,\{A,B\}\}\\
:::A,B\text{<set>}
\end{matrix}
$$

直积则是指元素的元组的集合, 注意严格来讲直积并不满足交换律. 

$$
\begin{matrix}
A\times B := \{(a,b):a\in A\and b\in B\}\\
:::A,B\text{<set>}
\end{matrix}
$$

## 映射

映射谓词为每个某种对象指定另一种对象, 由于此时我们不深入研究模型论, 因此只给出映射的类型签名的形式和文字描述, 而不形式化地定义它. 

$$
f: X\to Y
$$


- 上式中标识符 $X$ 和 $Y$ 分别被称为 $f$ 的来源和目标, 它们都是集合. 
- $f$ 对应了一个映射谓词( $\text{fn-props}$, 暂且称其为 $\phi$ ), 它使得当且仅当 $x$ 是 $X$ 中的元素才可能满足 $\phi(x, y)$, 对 $Y$ 同理. 

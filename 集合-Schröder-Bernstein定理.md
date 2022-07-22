---
TimeLine: 
=> 20220707--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 | #SYMBOL-V4 | 
| ------------ | ------------ | ---------- |

# § Schröder-Bernstein 定理

## Schröder-Bernstein 定理 [THM]

\<文字\>

两个集合之间存在两个方向的单射, 则两个集合之间存在双射. 

\<形式\>

$$
\BlockEndl{
    & \forall a\type{\Set\type{\rm T}}: \forall b\type{\Set\type{\rm T}}: \\
}{\;\;}{
    & \CondBegin\\
    & \exist f\type{\Set\type{\rm T}}: f\in (a \into b)\\
    & \exist f\type{\Set\type{\rm T}}: f\in (b \into a)\\
    & \CondEnd\\
    & \exist f\type{\Set\type{\rm T}}: f\in (a \bito b)
}
$$

## Schröder-Bernstein 定理 [PRF]

\<文字\>

对任意一对 $a$ 到 $b$ 的单射 $f$, $b$ 到 $a$ 的单射 $g$. 

$a$ 到 $b$ 的映射 $h$ 在 $a$ 的一个子集上定义为: 

- 对 $g$ 值域外的 $x$ 有 $h(x)=f(x)$
- 对 $f$ 值域外的 $y$ 有 $h(g(y))=y$

此时, $h$ 在 $a$ 中未定义的部分和 $h$ 在 $b$ 中未覆盖的部分分别是: 

- $a' = g^\rarrow(f^\rarrow(a))$
- $b' = f^\rarrow(g^\rarrow(b))$

从而问题规约至单射 $f\big|_{a'}$ (值域在 $b'$ 内)和单射 $g\big|_{b'}$ 上(值域在 $a'$ 内). 将 $a'$ 当作 $a$, 将 $b'$ 当作 $b$, 重复上述步骤. 

对任意有限步, $h$ 都在 $a \diagdown a'$ 和 $b \diagdown b'$ 上成为双射. 

对于无穷步后得到的定义域 $a_\infin$ 和值域 $b_\infin$ , 易知 $f\big|_{a_\infin}$ 是 $a_\infin$ 到 $b_\infin$ 的双射, 且 $g\big|_{b_\infin}$ 是 $b_\infin$ 到 $a_\infin$ 的双射. 

\<形式\>

$$
\BlockEndl{
    & \forall a\type{\Set\type{\rm T}}: \forall b\type{\Set\type{\rm T}}: \\
    & \forall f\type{\Set\type{\rm T}}: \forall g \type{\Set\type{\rm T}}:\\
}{\;\;}{
    & \CondBegin\\
    & (f\in (a \into b))\and (g\in (b \into a))\\
    & {\rm let}: pairs := \left\{
        (s, t) : 
        \Block{(\or)}{\;\;}{
            & s = a \and t = b\\
            & \exist (s',t')\in pairs: (s,t)=(g^\rarrow(f^\rarrow(s')), f^\rarrow(g^\rarrow(t')))
        }
    \right\}\\
    & {\rm let}: takef := \Big\{x : \exist (s, t): (s, t)\in pairs \and x \in s \diagdown g^\rarrow(t)\Big\}\\
    & \CondEnd\\
    & \bigg(f\bigg|_{takef}\bigg) \cup \bigg(g^{\diamond -}\bigg|_{a \diagdown takef}\bigg) \in (a \bito b)
}
$$


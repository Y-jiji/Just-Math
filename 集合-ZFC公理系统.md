---
TimeLine: 
=> 20220701--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 | #SYMBOL-V4 | 
| ------------ | ------------ | ---------- |

# § ZFC公理系统

## ZFC公理系统 [DEF]

$$
\BlockEndl{
    & \meta : zfc::\Set\type{\rm T} \to \Bool
}{\;\;}{
    & \forall a \type{\Set\type{\rm T}}: \forall b \type{\Set\type{\rm T}}: (zfc\;a) \and (zfc\;b) \Rarrow (zfc\;\{a, b\})\\
    & \forall a \type{\Set\type{\rm T}}: \forall b \type{\Set\type{\rm T}}: (zfc\;a) \Rarrow (zfc\;a \cap b)\\
    & \forall a \type{\Set\type{\rm T}}: \forall b \type{\Set\type{\rm T}}: (zfc\;a) \and (map\;b)\Rarrow (zfc\;\{y\type{\Set\type{\rm T}} : \exist x\type{\Set\type{\rm T}}: x \in a \and y = b(x) \})\\
    & \forall a \type{\Set\type{\rm T}}: (zfc\;a) \Rarrow (zfc\;(\pow\;a))\\
    & \forall a \type{\Set\type{\rm T}}: (zfc\;a) \and (\forall x: x \in a \Rarrow (\exist x': x'\in x)) \Rarrow \left(zfc\;\bigcup_{x \in a} x\right)\\
    & \exist a \type{\Set\type{\rm T}}: (zfc\;a) \and (a = \{x\type{\Set\type{\rm T}} : x = \varnothing \or \exist x'\type{\Set\type{\rm T}}: (x'\in a) \and (x = \{x'\} \cup x') \})\\
    & \forall a \type{\Set\type{\rm T}}: \forall b \type{\Set\type{\rm T}}: (a \in b) \and (b \in a)\\
}
$$
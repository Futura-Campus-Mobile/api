# futura-api

### Estrutura de dados
``` 
User

name: string
email: string
password: string
devices: Device[]
labels: Label[]
```
```
Device - Dispositivo Futura que fará o controle/medição dos aparelhos elétricos

model: string
currentLabel: (label ref)
isOn: boolean
```
```
Label - "Rótulo" dado a um aparelho elétrico que será medido por um dos dispositivos Futura

name: string
createdAt: date
data: ?
```

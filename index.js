nome = str(input("Digite o nome do Herói: "))
xp = int(input("Digite o XP do Heroi: "))

if xp <= 1000:
   nivel = "Ferro"
elif xp <= 2000:
   nivel = "Bronze"
elif xp <= 5000:
   nivel = "Prata "
elif xp <= 7000: 
   nivel = "Ouro"
elif xp <= 8000: 
   nivel = "Platina"
elif xp <= 9000:
   xp = "Ascendente"
elif xp <= 10000:
   nivel = "Imortal"
else:   
   nivel = "Radiante"
print(f"O Herói de nome {nome} está no nível {nivel}")

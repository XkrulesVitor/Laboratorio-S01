dim pin as integer = 67
dim pin_digitado as integer
print "Digite o PIN:"
input pin_digitado
if pin_digitado = pin then
    print "Transacao autorizada!"
else
    print "PIN invalido. Tente novamente."
end if
sleep
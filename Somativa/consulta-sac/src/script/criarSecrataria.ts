// src/script/criarSecretaria.ts
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/consulta-sac';

async function criarSecretaria() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Conectado ao MongoDB');

    // Verificar se já existe
    const Usuario = mongoose.model('Usuario', new mongoose.Schema({
      nome: String,
      email: String,
      senha: String,
      funcao: String
    }));

    const existe = await Usuario.findOne({ email: 'secretaria@clinica.com' });
    if (existe) {
      console.log('Secretaria já existe!');
      console.log('Email: secretaria@clinica.com');
      console.log(' Senha: (use a senha cadastrada)');
    } else {
      // Criar secretaria
      const secretaria = await Usuario.create({
        nome: 'Secretaria Principal',
        email: 'secretaria@clinica.com',
        senha: '123456', // Em produção, usar bcrypt!
        funcao: 'recepcionista'
      });
      console.log('🎉 SECRETARIA CRIADA!');
      console.log('📧 Email: secretaria@clinica.com');
      console.log('🔑 Senha: 123456');
    }
    
  } catch (error) {
    console.error(' Erro:', error);
  } finally {
    await mongoose.disconnect();
  }
}

criarSecretaria();
import { StyleSheet } from "react-native";

// Definindo as cores
export const colors = {
    primary: '#3498DB',        // Azul Claro (botões principais, destaques)
    secondary: '#2C3E50',      // Azul Marinho (botões secundários)
    background: '#E6F7FF',     // Azul Muito Claro (fundo)
    textPrimary: '#1a2733',    // Azul Marinho (texto principal)
    textSecondary: '#3498DB',  // Azul Claro (texto secundário)
    divider: '#BDBDBD',        // Cinza Claro (divisórias)
    accent: '#3498DB',         // Azul Claro (destaques)
    error: '#F44336',          // Vermelho (mensagens de erro)
    success: '#4CAF50',        // Verde (mensagens de sucesso)
    link: '#3498DB',           // Azul Claro (links)
    iconActive: '#3498DB',     // Cor para ícones ativos
    iconInactive: '#757575',    // Cor para ícones inativos
    contorno: '#000033',        // cor de contorno do texto
    iconColorBotão: '#FFFFFF', // Cor do ícone do botão
};

// Definindo os estilos globais
export const Styles = StyleSheet.create({

    // Estilos para títulos principais
    title: {
        fontSize: 26,                        // Tamanho da fonte
        textAlign: 'center',                 // Alinhamento do texto
        fontWeight: 'bold',                  // Peso da fonte
        color: colors.textPrimary,           // Cor do texto
        marginVertical: 15,                  // Margem vertical
        marginBottom: 10,                    // Margem inferior para espaçamento da base
        marginTop: 15,                       // Margem superior para espaçamento do topo
    },

    // Estilos para subtítulos
    subtitle: {
        fontSize: 20,                        // Tamanho da fonte
        textAlign: 'left',
        fontWeight: 'bold',                  // Peso da fonte
        color: colors.textPrimary,           // Cor do texto
        fontFamily: 'Arial, sans-serif',     // Fonte
        marginHorizontal: 15,                // Margem vertical
        marginTop: 5,                       // Margem superior para espaçamento do topo
        marginBottom: 15,                    // Margem inferior para espaçamento do texto abaixo
    },

    // Estilos para texto regular
    text: {
        fontFamily: 'Helvetica, Arial, sans-serif', // Fonte com fallback
        fontSize: 16,                               // Tamanho da fonte
        textAlign: 'justify',
        marginHorizontal: 20,                        // Margem horizontal para espaçamento dos lados
        lineHeight: 21,                             // Altura da linha
        color: colors.textPrimary,                   // Cor do texto
        marginBottom: 15,                           // Margem inferior para espaçamento da base
        marginTop: 5,                               // Margem superior para espaçamento do texto anterior
    },
    bannerContainer: {
        position: 'absolute', // Posiciona o banner de forma absoluta
        bottom: 0, // Posiciona o banner na base da tela
        width: '100%', // Largura completa da tela
        alignItems: 'center', // Centraliza o banner horizontalmente
        backgroundColor: colors.background, // Cor de fundo para evitar sobreposição de conteúdo
    },
    buttonPrimary: {
        backgroundColor: colors.primary,     // Cor de fundo do botão
        color: colors.textPrimary,           // Cor do texto do botão
        marginVertical: 15,                  // Margem vertical
        paddingVertical: 10,                 // Espaçamento vertical interno
        paddingHorizontal: 15,               // Espaçamento horizontal interno
        borderRadius: 20,                    // Raio da borda
        flexDirection: 'row',                // Direção dos itens (imagem e texto)
        alignItems: 'center',                // Alinhamento vertical dos itens
        justifyContent: 'flex-start',            // Alinhamento horizontal dos itens
        height: 45,                          // Altura total do botão
        width: '82%',                        // Largura total do botão
        alignSelf: 'center',                 // Centraliza o botão horizontalmente
    },
    buttonTextPrimary: {
        color: '#FFFFFF',                    // Cor do texto
        fontWeight: 'bold',                  // Peso da fonte
        fontSize: 22,                        // Tamanho da fonte
        marginLeft: 15,                      // Espaçamento à esquerda da imagem
        lineHeight: 28,                      // Altura da linha do texto
        textShadowColor: colors.contorno,   // Cor da sombra
        textShadowOffset: { width: 2, height: 1.5 }, // Offset da sombra
        textShadowRadius: 2,                 // Raio da sombra
    },
});

export default Styles;

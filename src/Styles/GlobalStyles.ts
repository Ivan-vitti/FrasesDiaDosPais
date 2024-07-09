import { Image, StyleSheet } from "react-native";

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
    iconInactive: '#757575'    // Cor para ícones inativos
};

// Definindo os estilos globais
export const GlobalStyles = StyleSheet.create({

    // Estilos para o corpo da página
    body: {
        backgroundColor: colors.background,  // Cor de fundo do corpo
        color: colors.textPrimary,           // Cor do texto principal
        fontFamily: 'Arial, sans-serif',     // Fonte padrão
        fontSize: 24,                        // Tamanho da fonte
        lineHeight: 24,                      // Altura da linha
        margin: 0,                           // Margem
        padding: 0,                          // Espaçamento interno
        fontWeight: 'bold',                  // Peso da fonte

    },

    // Estilos para containers principais
    container: {
        flex: 1,                             // Flexível para preencher o espaço
        alignItems: 'stretch',               // Alinhamento dos itens
        maxWidth: 1200,                      // Largura máxima
        margin: 0,                           // Margem
        padding: 15,                         // Espaçamento interno
        shadowColor: '#000',                 // Cor da sombra
        shadowOffset: {                      // Deslocamento da sombra
            width: 0,                        // Deslocamento horizontal da sombra
            height: 2,                       // Deslocamento vertical da sombra
        },
        shadowOpacity: 0.25,                 // Opacidade da sombra
        shadowRadius: 3.84,                  // Raio da sombra
        elevation: 5,                        // Elevação da sombra (para Android)
        borderRadius: 5,                     // Raio da borda
        backgroundColor: '#FFFFFF',          // Cor de fundo do container
    },

    // Estilos para títulos principais
    title: {
        fontSize: 26,                        // Tamanho da fonte
        textAlign: 'center',                 // Alinhamento do texto
        fontWeight: 'bold',                  // Peso da fonte
        color: colors.textPrimary,           // Cor do texto
        marginVertical: 15,                  // Margem vertical
        marginBottom: 10,                    // Margem inferior para espaçamento da base
    },

    // Estilos para subtítulos
    subtitle: {
        fontSize: 20,                        // Tamanho da fonte
        textAlign: 'center',
        fontWeight: 'bold',                  // Peso da fonte
        color: colors.textPrimary,           // Cor do texto
        fontFamily: 'Arial, sans-serif',     // Fonte
        marginTop: 1,                   // Margem superior para espaçamento do topo
        marginBottom: 1,                // Margem inferior para espaçamento da base

    },

    // Estilos para texto regular
    text: {
        fontSize: 16,                    // Tamanho da fonte
        textAlign: 'justify',
        marginHorizontal: 20,            // Margem horizontal para espaçamento dos lados
        marginTop: 1,                   // Margem superior para espaçamento do topo
        marginBottom: 20,                // Margem inferior para espaçamento da base
        lineHeight: 22,                  // Altura da linha
        color: colors.textPrimary,       // Cor do texto
    },

    // Estilos para legenda
    legend: {
        fontSize: 14,                        // Tamanho da fonte
        fontWeight: 'normal',                // Peso da fonte
        textAlign: 'center',                 // Alinhamento do texto
        color: colors.textPrimary,       // Cor do texto

    },

    // Estilos para campos de entrada (inputs)
    input: {
        backgroundColor: '#FFFFFF',          // Cor de fundo do campo
        borderWidth: 1,                      // Largura da borda
        borderColor: colors.divider,         // Cor da borda
        borderRadius: 5,                     // Raio da borda
        padding: 10,                         // Espaçamento interno
        fontSize: 14,                        // Tamanho da fonte
        color: colors.textPrimary,           // Cor do texto
        width: '100%',                       // Largura total
        marginBottom: 10,                    // Margem inferior
    },

    // Estilos para botões principais
    buttonPrimary: {
        backgroundColor: colors.primary,     // Cor de fundo do botão
        color: colors.textPrimary,           // Cor do texto do botão
        marginVertical: 10,                  // Margem vertical
        paddingVertical: 12,                 // Espaçamento vertical interno
        paddingHorizontal: 24,               // Espaçamento horizontal interno
        borderRadius: 15,                    // Raio da borda
        cursor: 'pointer',                   // Cursor do mouse
        flexDirection: 'row',                // Direção dos itens (imagem e texto)
        alignItems: 'center',                // Alinhamento vertical dos itens
    },

    // Estilos para botões secundários
    buttonSecondary: {
        backgroundColor: colors.secondary,   // Cor de fundo do botão
        color: '#FFFFFF',                    // Cor do texto do botão (mantida como branca para contraste)
        paddingVertical: 10,                 // Espaçamento vertical interno
        paddingHorizontal: 20,               // Espaçamento horizontal interno
        borderRadius: 15,                    // Raio da borda
        cursor: 'pointer',                   // Cursor do mouse
        borderWidth: 1,                      // Largura da borda
        borderColor: colors.secondary,       // Cor da borda
        flexDirection: 'row',                // Direção dos itens (imagem e texto)
        alignItems: 'center',                // Alinhamento vertical dos itens
    },

    // Estilos para texto dentro dos botões principais
    buttonTextPrimary: {
        color: '#FFFFFF',                    // Cor do texto
        fontWeight: 'bold',                  // Peso da fonte
        fontSize: 17,                        // Tamanho da fonte
        marginLeft: 20,                      // Espaçamento à esquerda da imagem
    },

    // Estilos para texto dentro dos botões secundários
    buttonTextSecondary: {
        color: '#FFFFFF',                    // Cor do texto
        fontWeight: 'bold',                  // Peso da fonte
        fontSize: 18,                        // Tamanho da fonte
        marginLeft: 20,                      // Espaçamento à esquerda da imagem
    },

    // Estilos para ícones médios
    iconMedium: {
        fontSize: 24,                        // Tamanho do ícone
        color: colors.iconInactive,          // Cor inicial para ícones inativos
    },

    // Estilos para ícones médios ativos
    iconMediumActive: {
        color: colors.iconActive,            // Cor para ícones ativos
    },

    // Estilos para imagem na home
    ImageHome: {
        width: 55,                           // Largura da imagem
        height: 55,                          // Altura da imagem
        marginLeft: -15,                     // Margem à esquerda da imagem
    },
});

export default GlobalStyles;

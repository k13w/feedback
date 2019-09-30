export const cpfMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  export const phoneMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{0})(\d{0})/, '$1($2')
      .replace(/(\d{2})(\d{0})/, '$1)$2')
      .replace(/(\d{0})(\d{3})/, '$1 $2')
      .replace(/(\d{1})(\d{2})/, '$1.$2')
      .replace(/(\d{4})(\d{0})/, '$1-$2')
  }
  
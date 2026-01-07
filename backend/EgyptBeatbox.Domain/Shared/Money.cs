namespace EgyptBeatbox.Domain.Shared
{
	public record Money
	{
		public decimal Amount { get; }
		public Currency Currency { get; }

		public Money(decimal Amount, Currency Currency) 
		{
			if (Amount < 0)
				throw new InvalidOperationException("Amount has to be non-negative");

			this.Amount = Amount;
			this.Currency = Currency;
		}
		public static Money operator +(Money first, Money second)
		{
			if (first.Currency != second.Currency)
				throw new InvalidOperationException("Currencies have to be equal");

			return new Money(first.Amount + second.Amount, first.Currency);
		}

		public static Money operator *(Money first, int n)
		{
			if (n < 0)
				throw new InvalidOperationException("Multiplier has to be non-negative");

			return new Money(first.Amount * n, first.Currency);
		}

		public static Money Zero() => new Money(0, Currency.None);
		public static Money Zero(Currency currency) => new Money(0, currency);

		public bool IsZero() => this == Zero(Currency);
	}
}

namespace EgyptBeatbox.Domain.Shared
{
	public record Currency
	{
		internal static readonly Currency None = new("");
		public static readonly Currency EGP = new("USD");

		private Currency(string code) => Code = code;
		public string Code { get; init; }

		public static Currency FromCode(string code)
		{
			return All.FirstOrDefault(x => x.Code == code) ??
				throw new ApplicationException("The currency code is invalid");
		}

		public static readonly IReadOnlyCollection<Currency> All = new[]
		{
			EGP
		};
	}
}

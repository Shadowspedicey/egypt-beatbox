namespace EgyptBeatbox.Domain.Shared
{
	public readonly record struct ShortId
	{
		public string Value { get; }

		private ShortId(string value)
		{
			Value = value;
		}

		public static ShortId Generate()
		{
			var value = Random.Shared
				.Next(0, 100000)
				.ToString("D5");

			return new ShortId(value);
		}

		public override string ToString() => Value;
	}
}

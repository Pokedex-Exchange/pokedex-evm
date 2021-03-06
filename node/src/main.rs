// Copyright 2019-2021 PureStake Inc.
// This file is part of Moonbeam.

// Moonbeam is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Moonbeam is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Moonbeam.  If not, see <http://www.gnu.org/licenses/>.

//! Moonbase parachain collator

#![warn(missing_docs)]
#![warn(unused_extern_crates)]

mod chain_spec;
#[cfg(feature = "test-spec")]
mod test_spec;
#[macro_use]
mod service;
mod cli;
mod command;
mod inherents;
mod rpc;

fn main() -> sc_cli::Result<()> {
	command::run()
}
